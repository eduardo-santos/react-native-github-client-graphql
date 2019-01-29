import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";

import Navigator from "./config/routes";

import store from "./config/store";

import { client } from "./helpers/apolloGraphQL";

export default () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Navigator onNavigationStateChange={null} />
    </ApolloProvider>
  </Provider>
);
