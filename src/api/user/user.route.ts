import express from "express";
const user_router = express.Router();
import UserController from "./user.controller";
const controller = new UserController();
import { getValidation } from "./user.validate";

/**
 * @swagger
 * /user/{id}:
 *  get:
 *    tags:
 *     - User
 *    parameters:
 *    - name: id
 *      required: true
 *      in: path
 *    responses:
 *      200:
 *        description: Success
 */
user_router.get("/:id", getValidation, controller.get);

export default user_router;
