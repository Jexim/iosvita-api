import { Router } from "express";
import * as PurchasesController from "../controllers/purchases.controller";
import * as UsersMiddleware from "../middlewares/users.middleware";

const router = Router();

router.get("/", PurchasesController.purchasesList);
router.post("/", UsersMiddleware.validateUser, PurchasesController.createPurchase);

export default router;
