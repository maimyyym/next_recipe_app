import React, { ReactNode } from "react";

export type DescriptionBoxProps = {
  children: ReactNode;
};

export const DescriptionBox: React.FC<DescriptionBoxProps> = ({ children }) => {
  return (
    <div className="h-auto p-1 m-6 w-96">
      <p className="text-xl text-vividRed">【詳細】</p>
      <p className="pl-4">{children}</p>
    </div>
  );
};
