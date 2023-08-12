import { Document, Schema } from "mongoose";

import { IUser } from "../interfaces/model.interface";

import UserDatasource from "../datasources/user.datasource";

class UserService {
    public static async findUserByUsername(username: string) {
        try {
            const res: (Document<unknown, {}, IUser> & IUser & Required<{
                _id: string | Schema.Types.UUID;
            }>) | null = await UserDatasource.findByUsername(username);

            const resData = {
                _id: res?._id || '',
                username: res?.username || ''
            }

            return resData;
        } catch (err) {
            throw err;
        }
    }

    public static async createUser(username: string) {
        try {
            const res = await UserDatasource.create(username);

            return res;
        } catch (err) {
            throw err;
        }
    }
}

export default UserService;