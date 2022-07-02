import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import { client } from "./lib";
import { Router } from "./routes";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
