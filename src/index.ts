import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";

import schema from "./schema";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const server = new ApolloServer({ schema });
server.applyMiddleware({ app, path: "/graphql" });

app.listen(port, () => console.log("Server started on, port", port));
