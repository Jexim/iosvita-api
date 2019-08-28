import { Router } from "express";
import * as CategoriesController from "../controllers/categories.controller";

const router = Router();

router.get("/", CategoriesController.categoriesList);

export default router;
