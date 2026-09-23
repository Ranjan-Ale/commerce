import express from "express";
import upload from "../../middleware/upload.js";
import { uploadProductImage } from "../../controllers/productImageController.js";

const router = express.Router();


router.post(
    "/images",
    upload.single("image"),
    uploadProductImage
);

export  {router as productImageRouter};