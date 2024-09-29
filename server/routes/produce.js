import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import produceController from "../controllers/produce.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", produceController.getGifts);

router.get("/:produceId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/produce.html"));
});

export default router;
