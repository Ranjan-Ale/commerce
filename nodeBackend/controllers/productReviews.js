import { prisma } from "../config/database.js";


// CREATE REVIEW
async function createProductReview(req, res){
    try {
        const {
            user_id,
            product_id,
            product_variant_id,
            review_title,
            description
        } = req.body;

        // Required fields
        if (!user_id || !product_id || !review_title) {
            return res.status(400).json({
                message: "User, product and review title are required"
            });
        }

        // Convert IDs to BigInt
        let userId;
        let productId;
        let productVariantId = null;

        try {
            userId = BigInt(user_id);
            productId = BigInt(product_id);

            // Variant is optional
            if (product_variant_id) {
                productVariantId = BigInt(product_variant_id);
            }
        } catch (error) {
            return res.status(400).json({
                message: "Invalid user, product or variant ID"
            });
        }

        // Check user exists
        const user = await prisma.users.findUnique({
            where: {
                id: userId
            }
        });

        if (!user) {
            return res.status(404).json({
                message: "User does not exist"
            });
        }

        // Check product exists
        const product = await prisma.products.findUnique({
            where: {
                id: productId
            }
        });

        if (!product) {
            return res.status(404).json({
                message: "Product does not exist"
            });
        }

        // Check variant only if one was selected
        if (productVariantId !== null) {

            const variant = await prisma.product_variants.findUnique({
                where: {
                    id: productVariantId
                }
            });

            if (!variant) {
                return res.status(404).json({
                    message: "Product variant does not exist"
                });
            }

            // Make sure variant belongs to selected product
            if (
                String(variant.product_id) !==
                String(productId)
            ) {
                return res.status(400).json({
                    message:
                        "The selected variant does not belong to the selected product"
                });
            }
        }

        // Create review
        const review = await prisma.product_reviews.create({
            data: {
                user_id: userId,
                product_id: productId,
                product_variant_id: productVariantId,
                review_title: review_title.trim(),
                description: description
                    ? description.trim()
                    : null
            }
        });

        return res.status(201).json({
            message: "Review created successfully",
            review
        });

    } catch (error) {
        console.error("Create review error:", error);

        return res.status(500).json({
            message: "Failed to create review",
            error: error.message
        });
    }
};



// Get all product reviews
export const getProductReviews = async (req, res) => {
	try {
		const reviews = await prisma.product_reviews.findMany({
			orderBy: {
				id: "desc"
			}
		});

		res.status(200).json(reviews);
	} catch (error) {
		console.error("Error fetching product reviews:", error);

		res.status(500).json({
			message: "Failed to fetch product reviews"
		});
	}
};


// Get one product review by ID

export const getProductReviewById = async (req, res) => {
	try {
		const id = BigInt(req.params.id);

		const review = await prisma.product_reviews.findUnique({
			where: {
				id: id
			}
		});

		if (!review) {
			return res.status(404).json({
				message: "Product review not found"
			});
		}

		res.status(200).json(review);
	} catch (error) {
		console.error("Error fetching product review:", error);

		res.status(500).json({
			message: "Failed to fetch product review"
		});
	}
};


// DELETE REVIEW
async function deleteProductReview(req, res) {
    try {
        const id = BigInt(req.params.id);

        const review = await prisma.product_reviews.findUnique({
            where: {
                id: id
            }
        });

        if (!review) {
            return res.status(404).json({
                message: "Product review not found"
            });
        }

        await prisma.product_reviews.delete({
            where: {
                id: id
            }
        });

        res.json({
            message: "Product review deleted"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not delete product review"
        });
    }
}

async function updateProductReview(req, res) {
	try {
		const id = BigInt(req.params.id);

		const {
			user_id,
			product_id,
			product_variant_id,
			review_title,
			description
		} = req.body;

		const updatedReview = await prisma.product_reviews.update({
			where: {
				id: id
			},
			data: {
				user_id: BigInt(user_id),
				product_id: BigInt(product_id),
				product_variant_id: product_variant_id
					? BigInt(product_variant_id)
					: null,
				review_title,
				description
			}
		});

		res.status(200).json({
			message: "Product review updated successfully",
			review: updatedReview
		});

	} catch (error) {
		console.error("Update product review error:", error);

		res.status(500).json({
			message: "Failed to update product review",
			error: error.message
		});
	}
};

export {
    createProductReview,
    deleteProductReview, 
    updateProductReview
};