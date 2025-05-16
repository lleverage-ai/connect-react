import { ConfigurableProp } from "@pipedream/sdk";
import type { CSSProperties } from "react";

import { useCustomize } from "../hooks/customization-context";

export type OptionalFieldButtonProps = {
  prop: ConfigurableProp;
  enabled: boolean;
  onClick: () => void;
};

export const OptionalFieldButton = (props: OptionalFieldButtonProps) => {
  const { prop, enabled, onClick } = props;
  const { getProps, theme } = useCustomize();

  const baseStyles: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${theme.spacing.baseUnit}px ${theme.spacing.baseUnit * 1.5}px ${
      theme.spacing.baseUnit
    }px ${theme.spacing.baseUnit * 2.5}px`,
    borderRadius: theme.borderRadius,
    cursor: "pointer",
    fontSize: "0.8125rem",
    fontWeight: 450,
    gap: theme.spacing.baseUnit * 2,
    textWrap: "nowrap",
    transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
  };

  return (
    <button
      onClick={onClick}
      type="button"
      {...getProps("optionalFieldButton", baseStyles, props)}
      className={`rounded-md border border-gray-100 ${
        enabled ? "bg-gray-100" : "bg-white"
      }`}
    >
      <span>{enabled ? "-" : "+"}</span>
      <span
        style={{
          marginRight: 8,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          maxWidth: "180px",
        }}
      >
        {prop.label || prop.name}
      </span>
      {/* <p style={{ fontSize: "0.6875rem", fontWeight: 400 }}>
        {prop.description}
      </p> */}
    </button>
  );
};
