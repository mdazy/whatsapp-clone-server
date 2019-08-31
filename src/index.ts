import express from "express";

import cors from "cors";

import chats from "./chats";

const app = express();
const port = 4000;

app.use(cors());

app.get("/chats", (req, res) => res.send(chats));

app.listen(port, () => console.log("Server started on, port", port));
