import { gql } from "@apollo/client";

export const getRecipesQuery = gql `
  query getRecipes {
    recipes {
      id
      title
      category
      required_time
    }
  }
`;

