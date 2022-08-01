import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./contexts";
import { client } from "./lib";
import { Router } from "./routes";

const App = () => {
  return (
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </AuthContextProvider>
  );
};

export default App;
