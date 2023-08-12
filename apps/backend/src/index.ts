import * as dotenv from 'dotenv';
import * as http from 'http';
import * as socketio from 'socket.io';
import express, { Express } from 'express';

import Database from './utils/database';

import { authRouter, chatRouter } from './routes';

dotenv.config();
const app: Express = express();

const server: http.Server = http.createServer(app);
const io: socketio.Server = new socketio.Server();
io.attach(server);

const port = process.env.NODE_LOCAL_PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/chat', chatRouter);

io.on('connection', (socket: socketio.Socket) => {
    console.log('connection');
    socket.emit('status', 'Hello from Socket.io');

    socket.on('disconnect', () => {
        console.log('disconnect');
    });
});

server.listen(port, async () => {
    await new Database();
    console.log('listening on *:', port);
});
