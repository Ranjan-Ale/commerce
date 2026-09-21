import { prisma } from "../config/database.js";


// CREATE PRODUCT
async function createProduct(req, res) {
    try {
        const { name, slug, description, category_id } = req.body;

        const product = await prisma.products.create({
            data: {
                name,
                slug,
                description,
                category_id: BigInt(category_id)
            }
        });

        res.status(201).json({
            message: "Product created",
            product: {
                ...product,
                id: product.id.toString(),
                category_id: product.category_id.toString()
            }
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not create product"
        });
    }
}


// GET ALL PRODUCTS
async function getProducts(req, res) {
    try {
        const products = await prisma.products.findMany();

        const result = products.map(product => ({
            ...product,
            id: product.id.toString(),
            category_id: product.category_id.toString()
        }));

        res.json(result);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get products"
        });
    }
}


// GET ONE PRODUCT
async function getProduct(req, res) {
    try {
        const id = BigInt(req.params.id);

        const product = await prisma.products.findUnique({
            where: {
                id: id
            }
        });

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json({
            ...product,
            id: product.id.toString(),
            category_id: product.category_id.toString()
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get product"
        });
    }
}


// DELETE PRODUCT
async function deleteProduct(req, res) {
    try {
        const id = BigInt(req.params.id);

        const product = await prisma.products.findUnique({
            where: {
                id: id
            }
        });

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        await prisma.products.delete({
            where: {
                id: id
            }
        });

        res.json({
            message: "Product deleted"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not delete product"
        });
    }
}


export {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct
};