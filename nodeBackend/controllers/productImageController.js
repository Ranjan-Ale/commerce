import { prisma } from "../config/database.js";

async function uploadProductImage(req, res) {
    try {
        const { product_id, variant_id } = req.body;

        // Multer gives us the uploaded file
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                message: "No image uploaded"
            });
        }

        const image = await prisma.product_images.create({
            data: {
                product_id: BigInt(product_id),

                variant_id: variant_id
                    ? BigInt(variant_id)
                    : null,

                filename: file.filename,

                size: String(file.size),

                upload_path: file.path
            }
        });

        return res.status(201).json({
            message: "Image uploaded successfully",
            image: {
                id: image.id.toString(),
                filename: image.filename,
                size: image.size,
                upload_path: image.upload_path
            }
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

export { uploadProductImage };