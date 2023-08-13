import mongoose, { Schema } from "mongoose";
import { randomUUID } from "crypto";

import { IUser } from "../interfaces/model.interface";

const schema = new Schema<IUser>({
    _id: {
        type: Schema.Types.UUID,
        default: () => randomUUID(),
    },
    username: String,
});

const UserModel = mongoose.model('User', schema);

export default UserModel;
