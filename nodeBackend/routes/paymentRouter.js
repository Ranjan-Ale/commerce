import express from "express"
import { authenticate } from "../middleware/authMiddleware.js"
const router = express.Router()

import { payment } from "../controllers/paymentsController.js"

router.post("/:id", authenticate, payment)

export {router as paymentRouter}