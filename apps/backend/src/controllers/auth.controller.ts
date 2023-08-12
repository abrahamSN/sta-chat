import {Request, Response} from 'express';

class AuthController {
    public static login(req: Request, res: Response) {
        res.send('join');
    }
    public static logout(req: Request, res: Response) {
        res.send('leave');
    }
}

export default AuthController;