import React, { ReactNode } from "react";
import Image from "next/image";
import {
  DescriptionBox,
  IngredientBox,
  RecipeDetailTitle,
} from "../../atoms/recipeDetail";

export type RecipeDetailProps = {
  src: string;
  alt: string;
  title: string;
  requiredTime: string;
  ingredient: string;
  description: string;
  onCloseClick: () => void;
};

export const RecipeDetail: React.FC<RecipeDetailProps> = ({
  src,
  alt,
  title,
  requiredTime,
  ingredient,
  description,
  onCloseClick,
}) => {
  return (
    <div className="fixed w-3/4 p-6 m-auto overflow-y-scroll bg-white border-2 border-double left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/5 rounded-2xl border-vividRed">
      <div className="fixed top-2xl r-0">
        <button className="p-1 w-28" onClick={onCloseClick}>
          Close
        </button>
      </div>
      <div className="flex ml-6">
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          className="mt-10 mr-10"
        />
        <div className="flex-col">
          <div className="flex">
            <RecipeDetailTitle>{title}</RecipeDetailTitle>
            <p className="p-1 ml-4">🕑</p>
            <p className="p-1">{requiredTime}</p>
          </div>
          <IngredientBox>{ingredient}</IngredientBox>
        </div>
      </div>
      <DescriptionBox>{description}</DescriptionBox>
    </div>
  );
};
