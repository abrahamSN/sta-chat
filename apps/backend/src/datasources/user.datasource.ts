import UserModel from '../models/user.model';

class UserDatasource {
    public static async findByUsername(username: string) {
        const res = await UserModel.findOne({ username: username });

        return res;
    }

    public static async create(username: string) {
        const res = new UserModel({username: username});

        await res.save();

        return res;
    }

    public static async findById(id: string) {
        const res = await UserModel.findById(id);

        return res;
    }
}

export default UserDatasource;