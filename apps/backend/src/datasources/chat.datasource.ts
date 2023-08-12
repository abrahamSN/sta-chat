import ChatModel from "../models/chat.model";

class RoomDatasource {
    public static async create(user_id: string, room_id: string, message: string) {
        const res = new ChatModel({user_id: user_id, room_id: room_id, message: message});

        await res.save();

        return res;
    }
}

export default RoomDatasource;
