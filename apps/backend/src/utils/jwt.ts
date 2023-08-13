import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const tokenSecret = process.env.JWT_SECRET || 'secret';

const generateToken = (user_id: string, user_name: string, room_id: string) => {
    return jwt.sign({ user_id, user_name, room_id }, tokenSecret, {
        expiresIn: '30d'
    });
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, tokenSecret);

        (req as any).user = decoded;

        next();
    } else {
        res.sendStatus(401);
    }
}

export {
    generateToken,
    verifyToken
};
