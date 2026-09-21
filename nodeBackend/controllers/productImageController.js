import { prisma } from "../config/database.js";


// CREATE IMAGE
async function createProductImage(req, res) {
    try {
        const {
            product_id,
            variant_id,
            filename,
            size,
            upload_path
        } = req.body;

        const image = await prisma.product_images.create({
            data: {
                product_id: BigInt(product_id),
                variant_id: variant_id ? BigInt(variant_id) : null,
                filename,
                size,
                upload_path
            }
        });

        res.status(201).json({
            message: "Product image created",
            image: {
                ...image,
                id: image.id.toString(),
                product_id: image.product_id.toString(),
                variant_id: image.variant_id
                    ? image.variant_id.toString()
                    : null
            }
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not create product image"
        });
    }
}


// GET ALL IMAGES
async function getProductImages(req, res) {
    try {
        const images = await prisma.product_images.findMany();

        const result = images.map(image => ({
            ...image,
            id: image.id.toString(),
            product_id: image.product_id.toString(),
            variant_id: image.variant_id
                ? image.variant_id.toString()
                : null
        }));

        res.json(result);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get product images"
        });
    }
}


// GET ONE IMAGE
async function getProductImage(req, res) {
    try {
        const id = BigInt(req.params.id);

        const image = await prisma.product_images.findUnique({
            where: {
                id: id
            }
        });

        if (!image) {
            return res.status(404).json({
                message: "Product image not found"
            });
        }

        res.json({
            ...image,
            id: image.id.toString(),
            product_id: image.product_id.toString(),
            variant_id: image.variant_id
                ? image.variant_id.toString()
                : null
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get product image"
        });
    }
}


// DELETE IMAGE
async function deleteProductImage(req, res) {
    try {
        const id = BigInt(req.params.id);

        const image = await prisma.product_images.findUnique({
            where: {
                id: id
            }
        });

        if (!image) {
            return res.status(404).json({
                message: "Product image not found"
            });
        }

        await prisma.product_images.delete({
            where: {
                id: id
            }
        });

        res.json({
            message: "Product image deleted"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not delete product image"
        });
    }
}


export {
    createProductImage,
    getProductImages,
    getProductImage,
    deleteProductImage
};