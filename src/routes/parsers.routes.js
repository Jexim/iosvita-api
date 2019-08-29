import { Router } from "express";
import * as ParcersController from "../controllers/parsers.controller";
import * as UsersMiddleware from "../middlewares/users.middleware";

const router = Router();

router.get("/", ParcersController.parseAllFromDocs);
router.get("/products", UsersMiddleware.validateUser, ParcersController.parseProductsFromDocs);
router.get("/categories", UsersMiddleware.validateUser, ParcersController.parseCategoriesFromDocs);
router.get("/dks", UsersMiddleware.validateUser, ParcersController.parseDksFromDocs);

export default router;
