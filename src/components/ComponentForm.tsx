import type {
  ConfigurableProps,
  ConfiguredProps,
  V1Component,
} from "@pipedream/sdk";

import {
  DynamicProps,
  type FormContext,
  FormContextProvider,
} from "../hooks/form-context";

import {
  InternalComponentForm,
  type InternalComponentFormProps,
} from "./InternalComponentForm";

export type ComponentFormProps<
  T extends ConfigurableProps,
  U = ConfiguredProps<T>
> = {
  userId: string;
  component: V1Component<T>;
  configuredProps?: U; // XXX value?
  disableQueryDisabling?: boolean;
  // dynamicPropsId?: string // XXX need to load this initially when passed
  propNames?: string[]; // TODO PropNames<T>
  onSubmit?: (ctx: FormContext<T>) => void | Promise<void>; // if passed, we include button
  onUpdateConfiguredProps?: (v: U) => void; // XXX onChange?
  onUpdateDynamicProps?: (dp: DynamicProps<T>) => void;
  hideOptionalProps?: boolean;
  hiddenOptionalProperties?: string[]; // Blacklist of property names to not display optional field buttons for
  defaultOptionalProperties?: string[]; // List of optional property names to enable by default
  sdkResponse?: unknown | undefined;
  enableDebugging?: boolean;
  /** Disable the entire form (read-only) */
  disabled?: boolean;
  renderLoading?: InternalComponentFormProps["renderLoading"];
  renderError?: InternalComponentFormProps["renderError"];
};

export function ComponentForm<T extends ConfigurableProps>(
  props: ComponentFormProps<T>
) {
  const { renderLoading, renderError, disabled, ...restProps } = props;

  return (
    <FormContextProvider props={restProps}>
      <InternalComponentForm
        disabled={disabled}
        renderLoading={renderLoading}
        renderError={renderError}
      />
    </FormContextProvider>
  );
}
