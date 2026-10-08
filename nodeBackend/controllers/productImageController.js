
import { prisma } from "../config/database.js";

// GET ALL PRODUCT IMAGES
export const getProductImages = async (req, res) => {
	try {
		const images = await prisma.product_images.findMany({
			orderBy: {
				id: "desc",
			},

			include: {
				product: {
					select: {
						id: true,
						name: true,
					},
				},

				variant: {
					select: {
						id: true,
						variant_name: true,
						variant_type: true,
						variant_value: true,
					},
				},
			},
		});

		res.status(200).json(images);
	} catch (error) {
		console.error("Get product images error:", error);

		res.status(500).json({
			message: "Failed to get product images",
			error: error.message,
		});
	}
};


export const getProductImageById = async (req, res) => {
	try {
		const { id } = req.params;

		const image = await prisma.product_images.findUnique({
			where: {
				id: BigInt(id),
			},

			include: {
				product: {
					select: {
						id: true,
						name: true,
					},
				},

				variant: {
					select: {
						id: true,
						variant_name: true,
						variant_type: true,
						variant_value: true,
					},
				},
			},
		});

		if (!image) {
			return res.status(404).json({
				message: "Product image not found",
			});
		}

		res.status(200).json({
			image: image,
		});

	} catch (error) {
		console.error(
			"Get product image by ID error:",
			error
		);

		res.status(500).json({
			message: "Failed to get product image",
			error: error.message,
		});
	}
};






export const updateProductImage = async (req, res) => {
	try {
		const { id } = req.params;
		const { product_id, variant_id } = req.body;

		const existingImage =
			await prisma.product_images.findUnique({
				where: {
					id: BigInt(id),
				},
			});

		if (!existingImage) {
			return res.status(404).json({
				message: "Product image not found",
			});
		}

		if (!product_id) {
			return res.status(400).json({
				message: "Product is required",
			});
		}

		// Check product
		const product = await prisma.products.findUnique({
			where: {
				id: BigInt(product_id),
			},
		});

		if (!product) {
			return res.status(404).json({
				message: "Product not found",
			});
		}

		// Check variant if provided
		if (variant_id) {
			const variant =
				await prisma.product_variants.findUnique({
					where: {
						id: BigInt(variant_id),
					},
				});

			if (!variant) {
				return res.status(404).json({
					message: "Variant not found",
				});
			}
		}

		const data = {
			product_id: BigInt(product_id),

			variant_id: variant_id
				? BigInt(variant_id)
				: null,
		};

		// Only update image fields if a new image was uploaded
		if (req.file) {
			data.filename = req.file.filename;
			data.size = req.file.size.toString();
			data.upload_path = req.file.path;
		}

		const updatedImage =
			await prisma.product_images.update({
				where: {
					id: BigInt(id),
				},
				data,
			});

		res.status(200).json({
			message:
				"Product image updated successfully",
			image: updatedImage,
		});
	} catch (error) {
		console.error(
			"Update product image error:",
			error
		);

		res.status(500).json({
			message:
				"Failed to update product image",
			error: error.message,
		});
	}
};


// DELETE PRODUCT IMAGE
export const deleteProductImage = async (req, res) => {
	try {
		const { id } = req.params;

		const existingImage = await prisma.product_images.findUnique({
			where: {
				id: BigInt(id),
			},
		});

		if (!existingImage) {
			return res.status(404).json({
				message: "Product image not found",
			});
		}

		await prisma.product_images.delete({
			where: {
				id: BigInt(id),
			},
		});

		res.status(200).json({
			message: "Product image deleted successfully",
		});
	} catch (error) {
		console.error("Delete product image error:", error);

		res.status(500).json({
			message: "Failed to delete product image",
			error: error.message,
		});
	}
};



export const createProductImage = async (req, res) => {
	try {
		const { product_id, variant_id } = req.body;

		// Check product
		if (!product_id) {
			return res.status(400).json({
				message: "Product is required",
			});
		}

		// Check image
		if (!req.file) {
			return res.status(400).json({
				message: "Image is required",
			});
		}

		// Check if product exists
		const product = await prisma.products.findUnique({
			where: {
				id: BigInt(product_id),
			},
		});

		if (!product) {
			return res.status(404).json({
				message: "Product not found",
			});
		}

		// If variant is provided, check if it exists
		if (variant_id) {
			const variant = await prisma.product_variants.findUnique({
				where: {
					id: BigInt(variant_id),
				},
			});

			if (!variant) {
				return res.status(404).json({
					message: "Variant not found",
				});
			}
		}

		// Create database record
		const productImage = await prisma.product_images.create({
			data: {
				product_id: BigInt(product_id),

				variant_id: variant_id
					? BigInt(variant_id)
					: null,

				filename: req.file.filename,

				size: req.file.size.toString(),

				upload_path: req.file.path,
			},
		});

		res.status(201).json({
			message: "Product image uploaded successfully",
			image: productImage,
		});

	} catch (error) {
		console.error("Create product image error:", error);

		res.status(500).json({
			message: "Failed to create product image",
			error: error.message,
		});
	}
};
