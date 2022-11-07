import http from "http";
import { app } from "./src/app";
import { dbConnect } from "./src/config/database";
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  dbConnect();
  console.log(`app listenning at ${port}`);
});
