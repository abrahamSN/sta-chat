import { Schema } from "mongoose";

interface IUser {
    _id: Schema.Types.UUID | string;
    username: string;
}

interface IRoom {
    _id: Schema.Types.UUID | string;
    name: string;
}

interface IChat {
    _id: Schema.Types.UUID | string;
    room_id: Schema.Types.UUID | string;
    user_id: Schema.Types.UUID | string;
    message: string;
}

export {
    IUser,
    IRoom,
    IChat,
}