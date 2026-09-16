import { add, show } from "../controllers/productController.js";
import express from "express"
const router = express.Router()

router.post("/add", add)
router.get("/show", show)

export {router as productRouter}