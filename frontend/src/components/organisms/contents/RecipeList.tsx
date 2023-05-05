import React from "react";
import { RecipeCard } from "@/components/molecules";
import { useToggle } from "@/hooks/useToggle";
import { usePagination } from "@/hooks/usePagenation";
import { RecipeDetail } from "./RecipeDetail";
import { Pager } from "./Pager";
import { Recipe } from "@/types";

type RecipeListProps = {
    recipes: Recipe[];
}

export const RecipeList: React.FC<RecipeListProps> = ({recipes}) => {

    const { currentPageData, nextPage, prevPage, hasMore, hasLess } = usePagination(recipes,12)
    const { isToggleOpen, selectedRecipedId, openToggle, closeToggle } = useToggle();

    const handleRecipeClick = (recipiId: string) => {
        openToggle(recipiId);
    }

    const handleCloseClick = () => {
        closeToggle();
    }

    return (
    <div className="w-full m-auto">
	<div className="flex flex-wrap justify-between p-20">
        {currentPageData.map((recipe: any) => (
            <div key={recipe.key}>
                <RecipeCard
                src="next.svg"
                alt="/"
                recipeId={recipe.id}
                onClick={(recipeId) =>handleRecipeClick(recipe.id)}
                title={recipe.title}
                time={recipe.time}>
                {recipe.description}
                </RecipeCard>
                </div>
                ))}
                {isToggleOpen && (<RecipeDetail
                    src="next.svg"
                    alt="test"
                    title="title"
                    description="test"
                    ingredient="test"
                    onCloseClick={handleCloseClick}>test</RecipeDetail>)}

        <Pager hasLess={hasLess} hasMore={hasMore} nextPage={nextPage} prevPage={prevPage} />
    </div>
	</div>
    );
};

