import express  from "express";

import { verifyToken } from "../utils/jwt";

import ChatController from "../controllers/chat.controller";

const router = express.Router();

router.post('/', verifyToken, ChatController.send);

export { router as chatRouter };
