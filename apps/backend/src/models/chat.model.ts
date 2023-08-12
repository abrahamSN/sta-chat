import mongoose, { Schema } from "mongoose";
import { randomUUID } from "crypto";

import { IChat } from "../interfaces/model.interface";

const schema = new Schema<IChat>({
    _id: {
        type: Schema.Types.UUID,
        default: () => randomUUID(),
    },
    room_id: { 
        type: Schema.Types.UUID, 
        ref: 'room', 
    },
    user_id: { 
        type: Schema.Types.UUID, 
        ref: 'user', 
    },
    message: String,
});

const ChatModel = mongoose.model('Chat', schema);

export default ChatModel;
