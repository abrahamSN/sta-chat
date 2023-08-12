import express  from "express";

import ChatController from "../controllers/chat.controller";

const router = express.Router();

router.post('/send', ChatController.send);

export { router as chatRouter };