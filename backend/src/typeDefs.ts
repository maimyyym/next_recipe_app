// 未使用
// スキーマ定義

export const typeDefs = `#graphql
  type Recipe {
    id: ID!
    title: String!
    description: String!
    category: String!
    user_id: Int!
  }

  type Query {
    recipes: [Recipe]
    recipe(id: ID!): Recipe
  }

  type Mutation {
    addRecipe(title: String!, description: String!): Recipe
  }
`;
