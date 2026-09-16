import { add, show } from "../controllers/productVariantController.js";
import express from "express"
const router = express.Router()

router.post("/add", add)
router.get("/show", show)

export {router as productVariantRouter}