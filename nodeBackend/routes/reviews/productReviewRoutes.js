import express from "express";

import {
    createProductReview,
    getProductReviews,
    getProductReview,
    deleteProductReview
} from "../../controllers/productReviews.js";

const router = express.Router();

router.post("/", createProductReview);

router.get("/", getProductReviews);

router.get("/:id", getProductReview);

router.delete("/:id", deleteProductReview);

export  {router as productReviewRouter};