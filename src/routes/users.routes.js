import { Router } from "express";
import * as UsersController from "../controllers/users.controller";

const router = Router();

router.post("/signup", UsersController.signUp);
router.post("/signin", UsersController.signIn);

export default router;
