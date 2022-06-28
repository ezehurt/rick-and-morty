import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "@apollo/client/core";

const httpLink = createHttpLink({
    uri: "https://rickandmortyapi.com/graphql"
  });


export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })