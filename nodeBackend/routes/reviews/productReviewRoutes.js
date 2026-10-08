import express from "express";

import {
    createProductReview,
    getProductReviews,
    getProductReviewById,
    deleteProductReview,
    updateProductReview
} from "../../controllers/productReviews.js";

const router = express.Router();

router.post("/", createProductReview);

router.get("/", getProductReviews);

router.get("/:id", getProductReviewById);

router.delete("/:id", deleteProductReview);

router.put("/:id", updateProductReview)

export  {router as productReviewRouter};