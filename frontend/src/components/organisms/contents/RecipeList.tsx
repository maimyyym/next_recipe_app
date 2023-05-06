import React from "react";
import { RecipeCard } from "@/components/molecules";
import { useToggle } from "@/hooks/useToggle";
import { usePagination } from "@/hooks/usePagenation";
import { RecipeDetail } from "./RecipeDetail";
import { Pager } from "./Pager";
import { Recipe } from "@/types";

type RecipeListProps = {
    recipes: Recipe[];
    currentPageData: Recipe[];
    nextPage: () => void;
    prevPage: () => void;
    hasMore: boolean;
    hasLess: boolean;
}

export const RecipeList: React.FC<RecipeListProps> = ({currentPageData, nextPage, prevPage, hasLess, hasMore, recipes = []}) => {

    const { isToggleOpen, selectedRecipedId, openToggle, closeToggle } = useToggle();

    const handleRecipeClick = (recipiId: string) => {
        openToggle(recipiId);
    }

    const handleCloseClick = () => {
        closeToggle();
    }

    return (
        <>
    <div className="w-4/5 h-auto p-4 pt-10 m-auto ml-8 overflow-auto">
    <div>
	<div className="flex flex-wrap justify-between p-10 align-content">
        {currentPageData.map((recipe: any) => (
            <div key={recipe.key}>
                <RecipeCard
                src="/image.png"
                alt="料理画像置き場"
                recipeId={recipe.id}
                onClick={(recipeId) =>handleRecipeClick(recipe.id)}
                title={recipe.title}
                time={recipe.required_time}>
                <div className="flex p-1 m-1 border-2 border-solid rounded-md border-darkGray">
            <p className="text-darkGray">＃</p><p className="text-darkGray">
            {recipe.category}
            </p>
            </div>
            </RecipeCard>
            {isToggleOpen && (
            <RecipeDetail
            src="/image.png"
            alt="料理画像置き場"
            title={recipe.title}
            requiredTime={recipe.required_time}
            description={recipe.description}
            ingredient="材料リスト（sample）"
            onCloseClick={handleCloseClick} />)}
        </div>
        ))}
        </div>
        <div className="flex items-center justify-center m-auto">
        <Pager hasLess={hasLess} hasMore={hasMore} nextPage={nextPage} prevPage={prevPage} />
    </div>
    </div>
	</div>
    </>
    );
};

