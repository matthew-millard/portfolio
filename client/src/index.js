import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import router from "./router";
import "./styles/index.css";

// Dynamically set the GraphQL URI based on the environment
const GRAPHQL_URI =
  process.env.NODE_ENV === "production" ? "/graphql" : "http://localhost:3001/graphql";

// Create the Apollo Client
export const client = new ApolloClient({
  uri: GRAPHQL_URI,
  credentials: "include",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
