import React, { ReactNode } from "react";

export type LabelProps = {
  htmlFor: string;
  children: ReactNode;
};

export const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};
