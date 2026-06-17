import http from "http";
import { Server } from "socket.io";
import app from "./app.js";

const server = http.createServer(app);
app.use("/api/stripe/webhook", express.raw({ type: "application/json" }));
export const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

server.listen(5000);