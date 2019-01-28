import ApolloClient from "apollo-boost";

let currentOAuthAccessToken = null;

export function updateOAuthAccessToken(OAuthAccessToken) {
  currentOAuthAccessToken = OAuthAccessToken;
}

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `bearer ${currentOAuthAccessToken}`
      }
    });
  }
});
