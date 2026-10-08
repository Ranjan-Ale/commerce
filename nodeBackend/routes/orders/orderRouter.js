import express from "express"

import {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrders,
    getOrder
} from "../../controllers/ordersController.js";

const router = express.Router();

router.post("/", createOrder);

router.get("/", getOrders);

router.put("/:id", updateOrder);

router.get("/:id", getOrder);

router.delete("/:id", deleteOrder)

export { router as orderRouter}