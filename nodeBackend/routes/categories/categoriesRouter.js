import express from "express"
import { authenticate } from "../../middleware/authMiddleware.js"

import {
     createCategory,
     getCategories,
     getCategory,
     deleteCategory, 
     updateCategory
} from "../../controllers/categoriesController.js"

const router = express.Router()

router.post("/",authenticate, createCategory)
router.get("/", getCategories)
router.delete("/:id", deleteCategory)
router.get("/:id",authenticate, getCategory)
router.put("/:id",authenticate, updateCategory)

export { router as categoriesRouter }
