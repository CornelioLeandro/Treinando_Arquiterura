import { Router } from "express";
import userController from "../controller/userController.js";

const router = Router();

router.get("/", userController.findAll);
router.get("/busca", userController.findFilter);
router.get("/:id", userController.findById);
router.put("/:id", userController.updateUser);
router.post("/", userController.createUser);

export default router;
