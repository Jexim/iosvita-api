import { Router } from "express";
import * as ProductsController from "../controllers/products.controller";
import * as UsersMiddleware from "../middlewares/users.middleware";

const router = Router();

router.get("/", ProductsController.productsList);
router.post("/", UsersMiddleware.validateUser, ProductsController.createProduct);

export default router;
