import { Router } from "express";
import * as DksController from "../controllers/dks.controller";

const router = Router();

router.get("/", DksController.dksList);

export default router;
