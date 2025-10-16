import express from "express";
import dotenv from "dotenv";
import sepatuRoutes from "./routes/sepatuRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/items", sepatuRoutes);

const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
