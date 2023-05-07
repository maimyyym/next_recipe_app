import React, { ReactNode } from "react";

export type RecipeCardBoxProps = {
  children: ReactNode;
};

export const RecipeCardBox: React.FC<RecipeCardBoxProps> = ({ children }) => {
  return (
    <div className="p-4 m-2 border-2 rounded-lg shadow-md border-lightGray w-60 h-96">
      {children}
    </div>
  );
};
