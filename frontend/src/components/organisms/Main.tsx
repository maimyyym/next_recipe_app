import React, {useState, useCallback} from "react";
import { useRecipe } from "@/hooks/useRecipe";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";
import { useSidebar } from "@/hooks/useSidebar";
import { RecipeList, RecipeListTop, RecipeSearchSidebar } from "./contents";
import { usePagination } from "@/hooks/usePagenation";


export const Main: React.FC = () => {
    // レシピデータの取得
    const {recipes, error, loading} = useRecipe();
    // 選択されたカテゴリの配列
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    // 選択されたカテゴリに応じたレシピデータ
    const filteredRecipes = useCategoryFilter(recipes,selectedCategories);

    const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();
    const { currentPageData, nextPage, prevPage, hasMore, hasLess } = usePagination(filteredRecipes,8)

    const [isActiveItems, setIsActiveItems] = useState<string[]>([]);

    const handleSidebarOpen = () => {
        openSidebar();
    }

    const handleCloseClick = () => {
        closeSidebar();
    }

    // 選択中のカテゴリを全てsetSelectedCategories配列に格納
    const handleCategoryChange = useCallback((category: string) => {
        if(category){
        setSelectedCategories([...selectedCategories, category]);
        }
    }, [selectedCategories, setSelectedCategories]);

    if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(currentPageData);
  console.log(selectedCategories);
    return (
	<div>

        {isSidebarOpen && 
        <RecipeSearchSidebar
        isActive={isActiveItems}
        handleCategoryChange={handleCategoryChange}
        selectedCategories={selectedCategories}
        onClick={handleCloseClick}/> }

        <RecipeListTop onClick={handleSidebarOpen} />

        <RecipeList
        currentPageData={currentPageData}
        recipes={filteredRecipes}
        nextPage={nextPage}
        prevPage={prevPage}
        hasLess={hasLess}
        hasMore={hasMore}/>

	</div>
    );
};

