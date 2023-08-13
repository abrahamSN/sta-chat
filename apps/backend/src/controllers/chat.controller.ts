import { Request, Response } from 'express';

class ChatController {
    public static async send(req: Request, res: Response) {
        try {
            const { message } = req.body;

            console.log(req.body);

            
            // const res = await ChatModel.create(user_id, room_id, message);
        } catch (err) {
            res.status(500).json({ 'message': 'something went wrong' });
        }
    }
}

export default ChatController;