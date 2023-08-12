import express from 'express';
import io from 'socket.io';

// import mongooseClient from './utils/mongoose';

import { authRouter, chatRouter } from './routes';

const app = express();

app.use('/auth', authRouter);
app.use('/chat', chatRouter);

// io.on('connection', (socket) => {
//     console.log('a user connected');
// });

// mongooseClient.connect();

app.listen(3000, () => {
    console.log('listening on *:3000');
});
