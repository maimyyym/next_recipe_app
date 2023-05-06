import React from "react";
import { Button } from "@/components/atoms/elements";

export type RecipeListTopProps = {
    onClick: () => void;
};

export const RecipeListTop: React.FC<RecipeListTopProps> = ({onClick}) => {
    return (
    <>
        <div className="flex items-start w-full h-6 p-6 ml-auto mr-auto">
        <p className="p-2 mr-3 text-3xl">Recipe List</p>
        <Button onClick={onClick}>カテゴリ別に見る</Button>
	    </div>
    </>
    );
};

