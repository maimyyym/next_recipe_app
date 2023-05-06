import { useState, useEffect } from "react";
import { Recipe } from "@/types";


export const useCategoryFilter = (recipes: Recipe[], selectedCategories:string[]): Recipe[] => {
  const [filteredRecipes, setFilterRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (recipes) {
      if (selectedCategories.length > 0) {
        // recipe.categoryがselectedCategoriesに含まれるかチェック→trueであればfilteredに格納
        const filtered = recipes.filter((recipe) => selectedCategories.some((category) => recipe.category.includes(category)));
        setFilterRecipes(filtered);
      } else {
        setFilterRecipes(recipes);
      }
    }
  }, [recipes, selectedCategories]);


  return filteredRecipes
}
