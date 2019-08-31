import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import cors from "cors";

import schema from "./schema";
import db from "./db";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/chats", (req, res) => res.send(db));

const server = new ApolloServer({ schema });
server.applyMiddleware({ app, path: "/graphql" });

app.listen(port, () => console.log("Server started on, port", port));
