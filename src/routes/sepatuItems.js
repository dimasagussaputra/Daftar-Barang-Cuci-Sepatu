import express from "express";
import { SepatuModel } from "../models/sepatuModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const { status } = req.query;
        const sepatu = await SepatuModel.getAll(status);
        res.json(sepatu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
