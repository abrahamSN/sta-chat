import mongoose, { Schema } from "mongoose";
import { randomUUID } from "crypto";

import { IRoom } from "../interfaces/model.interface";

const schema = new Schema<IRoom>({
    _id: {
        type: Schema.Types.UUID,
        default: () => randomUUID(),
    },
    name: String,
});

const RoomModel = mongoose.model('Room', schema);

export default RoomModel;
