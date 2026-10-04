import express from "express";
import {
    uploadProductImage,
    getProductImages
} from "../../controllers/productImageController.js";

const router = express.Router();

router.get("/", getProductImages);
router.post("/",uploadProductImage)

export {router as productImageRouter} ;