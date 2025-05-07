import type { ConfigurableProp } from "@pipedream/sdk";
import { memo, useCallback, useEffect, useMemo } from "react";

import { useFormContext } from "../hooks/form-context";
import {
  FormFieldContext,
  FormFieldContextExtra,
} from "../hooks/form-field-context";
import { useApp } from "../hooks/use-app";

import { Field } from "./Field";

type FieldInternalProps<T extends ConfigurableProp> = {
  prop: T;
  idx: number;
};

// Create memoized version of the component to prevent unnecessary re-renders
function InternalFieldComponent<T extends ConfigurableProp>({
  prop,
  idx,
}: FieldInternalProps<T>) {
  const formCtx = useFormContext();
  const {
    id: formId,
    configuredProps,
    registerField,
    setConfiguredProp,
    errors,
    enableDebugging,
  } = formCtx;

  const appSlug = prop.type === "app" && "app" in prop ? prop.app : undefined;
  const {
    // TODO error
    app,
  } = useApp(appSlug || "", {
    useQueryOpts: {
      enabled: !!appSlug,
      // Remove the suspense option if causing TypeScript errors
      // suspense: !!appSlug,
    },
  });

  const fieldId = `pd${formId}${prop.name}`; // id is of form `:r{d}:` so has seps

  // Create a memoized onChange handler to maintain stable reference
  const onChange = useCallback(
    (value: any) => {
      setConfiguredProp(idx, value);
    },
    [idx, setConfiguredProp]
  );

  // Create a memoized fieldCtx to prevent unnecessary re-renders
  const fieldCtx = useMemo<FormFieldContext<T>>(
    () => ({
      id: fieldId,
      prop,
      idx,
      value: configuredProps[prop.name],
      onChange,
      // Cast the extra object to any to avoid TypeScript errors
      // with complex types that might be difficult to properly type
      extra: {
        app,
      } as FormFieldContextExtra<T>,
      errors,
      enableDebugging,
    }),
    [
      fieldId,
      prop,
      idx,
      configuredProps[prop.name],
      onChange,
      app,
      errors,
      enableDebugging,
    ]
  );

  useEffect(() => registerField(fieldCtx), [fieldCtx, registerField]);

  return (
    <FormFieldContext.Provider value={fieldCtx}>
      <Field field={fieldCtx} form={formCtx} />
    </FormFieldContext.Provider>
  );
}

// Export memoized version
export const InternalField = memo(
  InternalFieldComponent
) as typeof InternalFieldComponent;
