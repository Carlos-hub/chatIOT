import express from "express";
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { log } from "console";
import { any } from "webidl-conversions";
dotenv.config();
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
app.use(express.json())

io.listen(4999);
let users:IUser[] =[];
var room:object[]= [];

io.on('connection', (socket:any) =>{
    const connection = socket.id;
    console.log(socket.id);

    socket.on('join_room',(data:string) =>{
        socket.join(data);
        console.log('====================================');
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
        console.log('====================================');
    });
    
    
    socket.on('sendMessage',(data:any)=>{
        console.log(data);
        socket.to(data.room).emit('receive_message',data);
        room.push(data);
    });

// socket.on('userConnect',(user:any)=>{
//     console.log(user);
//     users.push({id:socket.id,username:user,room:[user]});
//     socket.join(user);
// });
socket.emit('getUsers',users);


socket.on('sendRoomMessage',(data:any)=>{
    socket.to(data.room).emit('receiveMessage',data)
})

});



export { app }