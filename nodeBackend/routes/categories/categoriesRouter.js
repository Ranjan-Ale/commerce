import express from "express"

import {
     createCategory,
     getCategories,
     getCategory,
     deleteCategory, 
     updateCategory
} from "../../controllers/categoriesController.js"

const router = express.Router()

router.post("/", createCategory)
router.get("/", getCategories)
router.delete("/:id", deleteCategory)
router.get("/:id", getCategory)
router.put("/:id", updateCategory)

export { router as categoriesRouter }
