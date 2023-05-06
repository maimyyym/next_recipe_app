import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { getRecipesQuery } from "@/graphql/queries/getRecipes";
import { Recipe } from "@/types";

export type UseRecipeProps = {
  recipes: Recipe[];
  error: Error | null;
  loading: boolean;
}

export const useRecipe = (): UseRecipeProps => {

  // レシピデータの状態（初期値は空配列）
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const { loading, error, data } = useQuery(getRecipesQuery);

  // クエリで取得したレシピデータをrecipesに格納
  useEffect(() => {
    if (!loading && !error && data) {
      setRecipes(data.recipes);
    }
  }, [data, loading, error]);


  return { recipes, error, loading }
};


