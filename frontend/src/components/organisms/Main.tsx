import React, {useState, useCallback} from "react";
import { useRecipe } from "@/hooks/useRecipe";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";
import { useSidebar } from "@/hooks/useSidebar";
import { RecipeList, RecipeListTop, RecipeSearchSidebar } from "./contents";



export const Page: React.FC = () => {
    // 
    const {recipes, error, loading} = useRecipe();
    // 選択されたカテゴリの配列
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    // 選択されたカテゴリに応じたレシピデータ
    const filteredRecipes = useCategoryFilter(recipes,selectedCategories);
    const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

    const handleSidebarOpen = () => {
        openSidebar()
    }

    // 選択中のカテゴリを全てsetSelectedCategories配列に格納
    const handleCategoryChange = useCallback((category: string) => {
        setSelectedCategories([...selectedCategories, category]);
    }, [setSelectedCategories]);

    if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

    return (
	<div>
        {isSidebarOpen && 
        <RecipeSearchSidebar handleCloseClick={handleCategoryChange} selectedCategories={selectedCategories}  onClick={closeSidebar}/> }
        <RecipeListTop onClick={handleSidebarOpen} />
        <RecipeList recipes={filteredRecipes} />
	</div>
    );
};

