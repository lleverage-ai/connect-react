"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { isSSR } from "../utils/isSSR";

type SSRSafeWrapperProps = {
  /**
   * The component or elements to render only on the client side
   */
  children: ReactNode;

  /**
   * Optional fallback component to render during SSR
   */
  fallback?: ReactNode;
};

/**
 * A wrapper component that ensures its children are only rendered in browser environments
 * and not during server-side rendering.
 */
export const SSRSafeWrapper: React.FC<SSRSafeWrapperProps> = ({
  children,
  fallback = null,
}) => {
  const [isMounted, setIsMounted] = useState(!isSSR());

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
