import * as express from "express";

import userRouter from "./src/api/user/user.route";

let router = express.Router();
router.use("/user", userRouter);

export default router;
