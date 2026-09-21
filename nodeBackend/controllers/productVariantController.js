import { prisma } from "../config/database.js";


// CREATE VARIANT
async function createVariant(req, res) {
    try {
        const {
            variant_name,
            variant_type,
            variant_value,
            description
        } = req.body;

        const variant = await prisma.product_variants.create({
            data: {
                variant_name,
                variant_type,
                variant_value,
                description
            }
        });

        res.status(201).json({
            message: "Product variant created",
            variant: {
                ...variant,
                id: variant.id.toString()
            }
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not create product variant"
        });
    }
}


// GET ALL VARIANTS
async function getVariants(req, res) {
    try {
        const variants = await prisma.product_variants.findMany();

        const result = variants.map(variant => ({
            ...variant,
            id: variant.id.toString()
        }));

        res.json(result);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get product variants"
        });
    }
}


// GET ONE VARIANT
async function getVariant(req, res) {
    try {
        const id = BigInt(req.params.id);

        const variant = await prisma.product_variants.findUnique({
            where: {
                id: id
            }
        });

        if (!variant) {
            return res.status(404).json({
                message: "Product variant not found"
            });
        }

        res.json({
            ...variant,
            id: variant.id.toString()
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get product variant"
        });
    }
}


// DELETE VARIANT
async function deleteVariant(req, res) {
    try {
        const id = BigInt(req.params.id);

        const variant = await prisma.product_variants.findUnique({
            where: {
                id: id
            }
        });

        if (!variant) {
            return res.status(404).json({
                message: "Product variant not found"
            });
        }

        await prisma.product_variants.delete({
            where: {
                id: id
            }
        });

        res.json({
            message: "Product variant deleted"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not delete product variant"
        });
    }
}


export {
    createVariant,
    getVariants,
    getVariant,
    deleteVariant
};