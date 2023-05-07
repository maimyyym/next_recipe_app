import React, { useState, useCallback } from "react";
import { useRecipe } from "@/hooks/useRecipe";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";
import { useSidebar } from "@/hooks/useSidebar";
import { RecipeList, RecipeListTop, RecipeSearchSidebar } from "./contents";
import { usePagination } from "@/hooks/usePagenation";

export const MainContent: React.FC = () => {
  // レシピデータの取得
  const { recipes, error, loading } = useRecipe();
  // 選択されたカテゴリの配列
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // 選択されたカテゴリに応じたレシピデータ
  const filteredRecipes = useCategoryFilter(recipes, selectedCategories);

  // サイドバーの開閉状態管理
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

  const handleSidebarOpen = () => {
    openSidebar();
  };

  const handleCloseClick = () => {
    closeSidebar();
  };

  // ページネーション読み込み
  const { currentPageData, nextPage, prevPage, hasMore, hasLess } =
    usePagination(filteredRecipes, 8);

  // 選択されたカテゴリを配列に出し入れ（メモ：useCallbackを使う意味は？）
  const handleCategoryChange = useCallback(
    (category: string) => {
      if (category) {
        if (selectedCategories.includes(category)) {
          // 選択カテゴリが配列に含まれていたら、そのカテゴリ以外を残して新たに配列を生成
          setSelectedCategories(
            selectedCategories.filter((item) => item !== category)
          );
        } else {
          // 選択カテゴリが配列になければ、選択カテゴリを配列に格納
          setSelectedCategories([...selectedCategories, category]);
        }
      }
    },
    [selectedCategories, setSelectedCategories]
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isSidebarOpen && (
        <RecipeSearchSidebar
          isActive={selectedCategories}
          handleCategoryChange={handleCategoryChange}
          selectedCategories={selectedCategories}
          onClick={handleCloseClick}
        />
      )}

      <RecipeListTop onClick={handleSidebarOpen} />

      <RecipeList
        currentPageData={currentPageData}
        recipes={filteredRecipes}
        nextPage={nextPage}
        prevPage={prevPage}
        hasLess={hasLess}
        hasMore={hasMore}
      />
    </div>
  );
};
