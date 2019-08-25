import express from "express";

import chats from "./chats";

const app = express();
const port = 3000;

app.get("/chats", (req, res) => res.send(chats));

app.listen(port, () => console.log("Server started on, port", port));
