import express from 'express';
import cors from 'cors'
const server = express();
const port = 8080;

server.use(express.json())
server.use(express.urlencoded())
server.use(cors())




server.listen(port,  ()=>{
    console.log(`server start ===>> ${port}`);
  });