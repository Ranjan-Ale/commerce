import express from "express";

import {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
} from "../../controllers/productController.js";

const router = express.Router();


// CREATE
router.post("/", createProduct);

// GET ALL
router.get("/", getProducts);

// GET ONE
router.get("/:id", getProduct);

// DELETE
router.delete("/:id", deleteProduct);

router.put('/:id', updateProduct)

export {router as productRouter}