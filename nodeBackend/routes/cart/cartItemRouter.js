import express from "express";

import {
    createCartItem,
    getCartItems,
    getCartItem,
    deleteCartItem
} from "../../controllers/cartItemsController.js";

const router = express.Router();

router.post("/", createCartItem);

router.get("/", getCartItems);

router.get("/:id", getCartItem);

router.delete("/:id", deleteCartItem);

export {router as cartItemRouter};