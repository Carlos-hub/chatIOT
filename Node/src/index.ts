import express from "express";
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
require('dotenv').config();
dotenv.config();
const port:string | undefined | any = process.env.PORT_SOCKET
const app = express();
const httpServer = createServer(app);
const io: SocketIOServer = require('socket.io')(httpServer, {
    cors: {
      origin: "*"
    }
    });

    interface IUser{
        id:string;
        username:string;
        room: string[]
    }
app.use(express.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});
app.use(cors({
    origin:['*','http://localhost:5173','https://chat-front-wjyy.vercel.app/']
   }))

io.listen( port | 4999);
let users:IUser[] =[];
var room:object[]= [];

io.on('connection', (socket:any) =>{
    console.log(socket.id);

    socket.on('joinRoom',(data:string) =>{
        socket.join(data);
        console.log('====================================');
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
    
    
    socket.on('sendMessage',(data:any)=>{
        console.log(data);
        socket.to(data.room).emit('receiveMessage',data);
    });


});



export { app }