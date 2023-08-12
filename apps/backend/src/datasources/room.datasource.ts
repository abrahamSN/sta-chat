import RoomModel from "../models/room.model";

class RoomDatasource {
    public static async findByName(name: string) {
        const res = await RoomModel.findOne({ name: name });

        return res;
    }

    public static async create(name: string) {
        const res = new RoomModel({name: name});

        await res.save();

        return res;
    }
}

export default RoomDatasource;
