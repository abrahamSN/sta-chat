import RoomDatasource from "../datasources/room.datasource";

class RoomService {
    public static async findRoomByName(name: string) {
        try {
            const res = await RoomDatasource.findByName(name);

            const resData = {
                _id: res?._id || '',
                name: res?.name || ''
            };

            return resData;
        } catch (err) {
            throw err;
        }
    }

    public static async createRoom(name: string) {
        try {
            const res = await RoomDatasource.create(name);

            return res;
        } catch (err) {
            throw err;
        }
    }
}

export default RoomService;