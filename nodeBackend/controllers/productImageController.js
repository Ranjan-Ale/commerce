import { prisma } from "../config/database.js";

export const uploadProductImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "No image uploaded"
            });
        }

        const { product_id, variant_id } = req.body;

        if (!product_id) {
            return res.status(400).json({
                message: "product_id is required"
            });
        }

        const productImage = await prisma.product_images.create({
            data: {
                product_id: BigInt(product_id),
                variant_id: variant_id ? BigInt(variant_id) : null,
                filename: req.file.filename,
                size: req.file.size.toString(),
                upload_path: `/uploads/${req.file.filename}`
            }
        });

        return res.status(201).json({
            message: "Product image uploaded successfully",
            image: productImage
        });

    } catch (error) {
        console.error("Product image upload error:", error);

        return res.status(500).json({
            message: "Failed to upload product image",
            error: error.message
        });
    }
};


export const getProductImages = async (req, res) => {
    try {
        const productImages = await prisma.product_images.findMany({
            orderBy: {
                id: "desc"
            }
        });

        return res.status(200).json({
            message: "Product images fetched successfully",
            images: productImages
        });

    } catch (error) {
        console.error("Get product images error:", error);

        return res.status(500).json({
            message: "Failed to fetch product images",
            error: error.message
        });
    }
};