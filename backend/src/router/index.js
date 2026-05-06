import { Router } from "express";
import { routerProductsList } from "../endpoints/productsList.js";

const router = Router();

router.use("/productsList", routerProductsList);

export { router };
