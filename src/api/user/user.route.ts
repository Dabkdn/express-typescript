import express from "express";
const user_router = express.Router();
import UserController from "./user.controller";
const controller = new UserController();

user_router.get("/:id", controller.get);

export default user_router;
