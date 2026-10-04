import express from "express";
import upload from "../../middleware/upload.js";
import { uploadProductImage, getProductImages } from "../../controllers/productImageController.js";

const router = express.Router();


router.post(
    "/",
    upload.single("image"),
    uploadProductImage
);

router.get("/", getProductImages)

export  {router as productImageRouter};