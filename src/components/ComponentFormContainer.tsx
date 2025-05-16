import { ConfigurableProps } from "@pipedream/sdk";

import { useComponent } from "../hooks/use-component";

import { ComponentForm, type ComponentFormProps } from "./ComponentForm";

// given
// key: string // in future, can be [@<owner>/]<key>[@<version>] -- for now just key
// load a component and pass it down
type ComponentFormContainerProps<T extends ConfigurableProps> = Omit<
  ComponentFormProps<T>,
  "component"
> & {
  defaultOptionalProperties?: string[];
  componentKey: string;
  renderLoading?: () => React.ReactNode;
  renderError?: (error: Error) => React.ReactNode;
  renderNotFound?: () => React.ReactNode;
};

export function ComponentFormContainer<T extends ConfigurableProps>(
  props: ComponentFormContainerProps<T>
) {
  const { isLoading, error, component } = useComponent({
    key: props.componentKey,
  });

  if (!props.componentKey) {
    throw new Error("componentKey required");
  }

  if (isLoading) {
    return props.renderLoading ? props.renderLoading() : <p>Loading...</p>;
  }

  if (error) {
    return props.renderError ? (
      props.renderError(error)
    ) : (
      <p>Error: {error.message}</p>
    );
  }

  if (!component) {
    return props.renderNotFound ? (
      props.renderNotFound()
    ) : (
      <p>Component not found</p>
    );
  }

  // Extract the render props to pass to ComponentForm
  const { renderLoading, renderError, renderNotFound, ...restProps } = props;

  // TODO move / improve lib.ts and make sure V1Component and it match / are shared
  return (
    <ComponentForm
      component={component}
      renderLoading={renderLoading}
      renderError={renderError}
      {...restProps}
    />
  );
}
