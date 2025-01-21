import { Router } from "express";
import productRouter from "./product.route.js";
const router = Router();

router.use("/api", productRouter);
router.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

export default router;
