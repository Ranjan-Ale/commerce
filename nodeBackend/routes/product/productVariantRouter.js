import express from "express";

import {
    createVariant,
    getVariants,
    getVariant,
    deleteVariant
} from "../../controllers/productVariantController.js";

const router = express.Router();


// CREATE
router.post("/", createVariant);

// GET ALL
router.get("/", getVariants);

// GET ONE
router.get("/:id", getVariant);

// DELETE
router.delete("/:id", deleteVariant);

export {router as productVariantRouter}