/* eslint-disable no-console */
/* eslint-disable import/extensions */
import "dotenv/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cors from "cors";
import { typeDefs, resolvers } from "./schemas/index.js";
import db from "./config/connection.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    // Extract the token from the Authorization header
    const token = req.headers.authorization || "";
    let adminId = null;

    if (token) {
      try {
        // Try to verify the token and get admin id
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        adminId = decodedToken.adminId;
      } catch (err) {
        console.error("JWT verification error", err);
      }
    }
    // Attach the decoded token to the context so it's available in resolvers
    return {
      req,
      res,
      adminId,
    };
  },
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app, cors: false });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer();
