import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import express from "express"; 

import dotenv from "dotenv";

dotenv.config();
const server = http.createServer(app);
app.use("/api/stripe/webhook", express.raw({ type: "application/json" }));
export const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});