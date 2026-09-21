import express from "express";

import {
    createCart,
    getCarts,
    getCart,
    deleteCart
} from "../../controllers/cartController.js";

const router = express.Router();


// CREATE
router.post("/", createCart);

// GET ALL
router.get("/", getCarts);

// GET ONE
router.get("/:id", getCart);

// DELETE
router.delete("/:id", deleteCart);


export {router as cartRouter};