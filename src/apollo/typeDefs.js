import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    passwordHash: String!
    role: [String!]!
    token: String!
  }

  type Movie {
    id: Int!
    name: String!
    rating: Int!
  }

  type Query {
    movies: [Movie!]!
    movie(id: Int!): Movie
    users: [User]!
    me: User
  }

  type Mutation {
    addMovie(name: String!, rating: Int!): Movie!
    addUser(email: String!, password: String!): User
    register(name: String!, email: String!, password: String!): Boolean!
    login(email: String!, password: String!): User
    logout: Boolean!
  }
`;

export default typeDefs;
