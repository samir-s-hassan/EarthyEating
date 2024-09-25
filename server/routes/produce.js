import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import produceData from "../data/produce.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(produceData);
});

router.get("/:produceId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/produce.html"));
});

export default router
