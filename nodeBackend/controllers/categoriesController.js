import { prisma } from "../config/database.js";


// CREATE CATEGORY
async function createCategory(req, res) {
    try {
        const { title, slug, description } = req.body;

        const category = await prisma.categories.create({
            data: {
                title,
                slug,
                description
            }
        });

        res.status(201).json({
            message: "Category created",
            category: {
                ...category,
                id: category.id.toString()
            }
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not create category"
        });
    }
}


// GET ALL CATEGORIES
async function getCategories(req, res) {
    try {
        const categories = await prisma.categories.findMany();

        const result = categories.map(category => ({
            ...category,
            id: category.id.toString()
        }));

        res.json(result);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get categories"
        });
    }
}


// GET ONE CATEGORY
async function getCategory(req, res) {
    try {
        const id = BigInt(req.params.id);

        const category = await prisma.categories.findUnique({
            where: {
                id: id
            }
        });

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }

        res.json({
            ...category,
            id: category.id.toString()
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get category"
        });
    }
}


// DELETE CATEGORY
async function deleteCategory(req, res) {
    try {
        const id = BigInt(req.params.id);

        const category = await prisma.categories.findUnique({
            where: {
                id: id
            }
        });

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }

        await prisma.categories.delete({
            where: {
                id: id
            }
        });

        res.json({
            message: "Category deleted"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not delete category"
        });
    }
}

async function updateCategory(req, res){
	try {
		const { id } = req.params;
		const { title, slug, description } = req.body;

		if (!title || !slug) {
			return res.status(400).json({
				message: "Title and slug are required"
			});
		}

		const category = await prisma.categories.update({
			where: {
				id: BigInt(id)
			},
			data: {
				title,
				slug,
				description
			}
		});

		return res.status(200).json({
			message: "Category updated successfully",
			category
		});

	} catch (error) {
		console.error(error);

		return res.status(500).json({
			message: "Failed to update category",
			error: error.message
		});
	}
};


export {
    createCategory,
    getCategories,
    getCategory,
    deleteCategory, 
    updateCategory
};