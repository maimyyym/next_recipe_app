import React, { ReactNode } from "react";

export type RecipeTitleProps = {
  children: ReactNode;
  recipeId: string;
  onClick: (recipeId: string) => void;
};

export const RecipeTitle: React.FC<RecipeTitleProps> = ({
  children,
  onClick,
  recipeId,
}) => {
  return (
    <p
      className="w-auto p-1 m-2 text-xl font-bold hover:border-dashed hover:border-b-2 hover:border-vividRed"
      onClick={() => onClick(recipeId)}
    >
      {children}
    </p>
  );
};
