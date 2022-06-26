import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4uh5m6e0z1y01t74y24g9ea/master",
  cache: new InMemoryCache(),
});
