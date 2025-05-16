import type { ConfigurableProp, ConfigurablePropAlert } from "@pipedream/sdk";
import { Suspense, useEffect, useState, memo } from "react";
import type { CSSProperties, FormEventHandler } from "react";

import { useCustomize } from "../hooks/customization-context";
import { skippablePropTypes, useFormContext } from "../hooks/form-context";

import { Alert } from "./Alert";
import { ControlSubmit } from "./ControlSubmit";
import { ErrorBoundary } from "./ErrorBoundary";
import { InternalField } from "./InternalField";

const alwaysShowSdkErrors = ["ConfigurationError"];

export type InternalComponentFormProps = {
  renderLoading?: () => React.ReactNode;
  renderError?: (error: Error) => React.ReactNode;
};

// Component implementation with memoization
function InternalComponentFormBase({
  renderLoading,
  renderError,
}: InternalComponentFormProps = {}) {
  const formContext = useFormContext();
  const {
    configurableProps,
    dynamicPropsQueryIsFetching,
    isValid,
    optionalPropIsEnabled,
    optionalPropSetEnabled,
    props: formContextProps,
    setSubmitting,
    sdkErrors: __sdkErrors,
    submitting,
    enableDebugging,
  } = formContext;

  const showSdkErrors =
    enableDebugging ||
    __sdkErrors.filter((e) => alwaysShowSdkErrors.includes(e.name)).length > 0;

  const { hideOptionalProps, onSubmit } = formContextProps;

  const [sdkErrors, setSdkErrors] = useState<ConfigurablePropAlert[]>([]);
  const [optionalPropsExpanded, setOptionalPropsExpanded] = useState(false);

  useEffect(() => {
    if (submitting) setSdkErrors([]);
    else {
      if (__sdkErrors && __sdkErrors.length) {
        setSdkErrors(
          __sdkErrors.map((e) => {
            return {
              type: "alert",
              alertType: "error",
              content: `# ${e.name}\n${e.message}`,
            } as ConfigurablePropAlert;
          })
        );
      }
    }
  }, [__sdkErrors, submitting]);

  const { getComponents, getProps, theme } = useCustomize();
  const { OptionalFieldButton } = getComponents();
  const baseStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const baseOptionalFieldsStyles: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem",
  };

  const baseHeadingStyles: CSSProperties = {
    fontWeight: 600,
    textTransform: "capitalize",
    color: theme.colors.neutral60,
    fontSize: "0.875rem",
    lineHeight: "1.375",
    margin: "0 0 0.5rem 0",
  };

  const _onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    if (onSubmit) {
      e.preventDefault();

      if (isValid) {
        setSubmitting(true);
        try {
          await onSubmit(formContext);
        } finally {
          setSubmitting(false);
        }
      }
    }
  };

  const shownProps: [ConfigurableProp, number][] = [];
  const optionalProps: [ConfigurableProp, boolean][] = [];
  for (let idx = 0; idx < configurableProps.length; idx++) {
    const prop = configurableProps[idx];
    if (prop.hidden) {
      continue;
    }
    if (skippablePropTypes.includes(prop.type)) {
      continue;
    }
    if (prop.optional) {
      const enabled = optionalPropIsEnabled(prop);
      optionalProps.push([prop, enabled]);
      if (hideOptionalProps || !enabled) {
        continue;
      }
    }
    shownProps.push([prop, idx]);
  }

  const defaultErrorUI = (err: any) => (
    <p
      style={{
        color: "red",
      }}
    >
      Error:{" "}
      {err &&
      typeof err === "object" &&
      "message" in err &&
      typeof err.message === "string"
        ? err.message
        : "Unknown"}
    </p>
  );

  const toggleOptionalProps = () => {
    setOptionalPropsExpanded(!optionalPropsExpanded);
  };

  return (
    <ErrorBoundary
      fallback={(err) => (renderError ? renderError(err) : defaultErrorUI(err))}
    >
      <Suspense
        fallback={renderLoading ? renderLoading() : <p>Loading form...</p>}
      >
        <form
          {...getProps("componentForm", baseStyles, formContextProps)}
          onSubmit={_onSubmit}
          className="gap-2"
        >
          {shownProps.map(([prop, idx]) => {
            if (prop.type === "alert") {
              return <Alert key={prop.name} prop={prop} />;
            }
            return <InternalField key={prop.name} prop={prop} idx={idx} />;
          })}
          {dynamicPropsQueryIsFetching &&
            (renderLoading ? renderLoading() : <p>Loading dynamic props...</p>)}
          {!hideOptionalProps && optionalProps.length ? (
            <div>
              <div
                onClick={toggleOptionalProps}
                className="flex cursor-pointer flex-row items-center gap-1"
                aria-controls="optional-props-content"
                aria-expanded={optionalPropsExpanded ? "true" : "false"}
                data-state={optionalPropsExpanded ? "open" : "closed"}
              >
                {optionalPropsExpanded ? (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="svg-inline--fa fa-caret-down fa-xs"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                    />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-right"
                    className="svg-inline--fa fa-caret-right fa-xs"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
                    />
                  </svg>
                )}
                <span className="text-xs font-medium">Optional Props</span>
              </div>
              {optionalPropsExpanded && (
                <div
                  id="optional-props-content"
                  {...getProps(
                    "optionalFields",
                    baseOptionalFieldsStyles,
                    formContextProps
                  )}
                >
                  {optionalProps.map(([prop, enabled]) => (
                    <OptionalFieldButton
                      key={prop.name}
                      prop={prop}
                      enabled={enabled}
                      onClick={() => optionalPropSetEnabled(prop, !enabled)}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : null}
          {showSdkErrors &&
            sdkErrors?.map((e, idx) => <Alert prop={e} key={idx} />)}
          {onSubmit && <ControlSubmit form={formContext} />}
        </form>
      </Suspense>
    </ErrorBoundary>
  );
}

// Export the memoized version
export const InternalComponentForm = memo(InternalComponentFormBase);
