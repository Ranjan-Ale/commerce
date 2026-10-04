import express from "express"

import {
     createCategory,
     getCategories,
     getCategory,
     deleteCategory
} from "../../controllers/categoriesController.js"

const router = express.Router()

router.post("/", createCategory)
router.get("/", getCategories)
router.delete("/:id", deleteCategory)
router.get("/:id", getCategory)

export { router as categoriesRouter }
