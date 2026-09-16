import express from "express"
import { addToCart } from "../controllers/cartController.js"
const app = express()
const router = express.Router()

router.post("/add/product", addToCart)

export {router as cartRouter}