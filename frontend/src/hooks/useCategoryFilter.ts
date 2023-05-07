import { useState, useEffect } from "react";
import { Recipe } from "@/types";

export const useCategoryFilter = (
  recipes: Recipe[],
  selectedCategories: string[]
): Recipe[] => {
  // フィルタリング済みのレシピデータをfilteredRecipesに定義・状態管理
  const [filteredRecipes, setFilterRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (recipes) {
      if (selectedCategories.length > 0) {
        // recipe.categoryが選択カテゴリの配列に含まれるかチェック、trueであればfilteredに格納
        const filtered = recipes.filter((recipe) =>
          selectedCategories.some((category) =>
            recipe.category.includes(category)
          )
        );
        // 上記データをfilteredRecipesに格納
        setFilterRecipes(filtered);
      } else {
        // 選択カテゴリの配列が空であればレシピデータを全てfilteredRecipesに格納
        setFilterRecipes(recipes);
      }
    }
  }, [recipes, selectedCategories]);

  return filteredRecipes;
};
