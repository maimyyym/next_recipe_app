import React from "react";
import { Button } from "@/components/atoms/elements";

export type RecipeListTopProps = {
    onClick: () => void;
};

export const RecipeListTop: React.FC<RecipeListTopProps> = ({onClick}) => {
    return (
	<div className="absolute flex w-full m-auto">
        <p className="relative m-1 text-2xl top-6 left-6">Recipe List</p>
        <div className="justify-end w-full m-auto">
        <Button onClick={onClick}>カテゴリ別に見る</Button>
        </div>
	</div>
    );
};

