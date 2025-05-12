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
  hideOptionalProps?: boolean;
};

// Component implementation with memoization
function InternalComponentFormBase({
  renderLoading,
  renderError,
  hideOptionalProps: hideOptionalPropsProp,
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

  const { hideOptionalProps: hideOptionalPropsContext, onSubmit } =
    formContextProps;

  // Use the directly passed prop if provided, otherwise fall back to the context value
  const hideOptionalProps =
    hideOptionalPropsProp !== undefined
      ? hideOptionalPropsProp
      : hideOptionalPropsContext;

  const [sdkErrors, setSdkErrors] = useState<ConfigurablePropAlert[]>([]);

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
      if (!enabled) {
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
                {...getProps("heading", baseHeadingStyles, formContextProps)}
              >
                Optional Props
              </div>
              <div
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
