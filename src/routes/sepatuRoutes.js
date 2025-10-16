import express from "express";
import { SepatuController } from "../controllers/sepatuController.js";

const router = express.Router();

router.get("/", SepatuController.getAll);
router.get("/:id", SepatuController.getById);
router.post("/", SepatuController.create);
router.put("/:id", SepatuController.update);
router.delete("/:id", SepatuController.remove);

export default router;
