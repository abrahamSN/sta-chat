import { Request, Response } from 'express';

import { IUser, IRoom } from '../interfaces/model.interface';

import AuthService from '../services/auth.service';
import UserService from '../services/user.service';
import RoomService from '../services/room.service';

class AuthController {
    public static async login(req: Request, res: Response) {
        try {
            const { username, room_name } = req.body;

            // check username is exist
            const userData: IUser = await UserService.findUserByUsername(username);

            let user: IUser;

            if (userData._id === '' && userData.username === '') {
                const userNew = await UserService.createUser(username);
                user = userNew;
            } else {
                user = {_id: userData._id, username: userData.username};
            }

            // check room name is exist
            const roomData = await RoomService.findRoomByName(room_name);

            let room: IRoom;

            if (roomData._id === '' && roomData.name === '') {
                const roomNew = await RoomService.createRoom(room_name);
                room = roomNew;
            } else {
                room = {_id: roomData._id, name: roomData.name};
            }

            // return session id
            const token = await AuthService.login(String(user._id), user.username, String(room._id));

            const data = {
                'token': token
            };

            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ 'message': 'something went wrong' });
        }
    }
    public static logout(req: Request, res: Response) {
        try {
            // check session id is exist

            // delete session

            res.status(200).json({ 'message': 'logout success' });
        } catch (err) {
            res.status(500).json({ 'message': 'something went wrong' });
        }
    }
}

export default AuthController;