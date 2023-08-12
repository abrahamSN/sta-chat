import { Request, Response } from 'express';

class ChatController {
    public static send(req: Request, res: Response) {
        res.send('send');
    }
}

export default ChatController;