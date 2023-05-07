//　未使用
import { mockRecipes } from "./mock/mockRecipes";

type recipe = {
  title: string;
  description: string;
  category: string;
  user_id: number;
};

// リゾルバー：モックデータを操作

export const resolvers = {
  Query: {
    recipes: () => mockRecipes,
    recipe: (_, { id }) => mockRecipes.find((recipe) => recipe.id === id),
  },
};
