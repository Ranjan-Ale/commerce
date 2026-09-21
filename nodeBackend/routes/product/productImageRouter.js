import express from "express";

import {
    createProductImage,
    getProductImages,
    getProductImage,
    deleteProductImage
} from "../../controllers/productImageController.js";

const router = express.Router();

router.post("/", createProductImage);

router.get("/", getProductImages);

router.get("/:id", getProductImage);

router.delete("/:id", deleteProductImage);

export {router as productImageRouter};