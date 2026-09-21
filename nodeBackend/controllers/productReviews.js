import { prisma } from "../config/database.js";


// CREATE REVIEW
async function createProductReview(req, res) {
    try {
        const {
            user_id,
            product_id,
            product_variant_id,
            review_title,
            description
        } = req.body;

        const review = await prisma.product_reviews.create({
            data: {
                user_id: BigInt(user_id),
                product_id: BigInt(product_id),
                product_variant_id: BigInt(product_variant_id),
                review_title,
                description
            }
        });

        res.status(201).json({
            message: "Product review created",
            review: {
                ...review,
                id: review.id.toString(),
                user_id: review.user_id.toString(),
                product_id: review.product_id.toString(),
                product_variant_id: review.product_variant_id.toString()
            }
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not create product review"
        });
    }
}


// GET ALL REVIEWS
async function getProductReviews(req, res) {
    try {
        const reviews = await prisma.product_reviews.findMany();

        const result = reviews.map(review => ({
            ...review,
            id: review.id.toString(),
            user_id: review.user_id.toString(),
            product_id: review.product_id.toString(),
            product_variant_id: review.product_variant_id.toString()
        }));

        res.json(result);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get product reviews"
        });
    }
}


// GET ONE REVIEW
async function getProductReview(req, res) {
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

        res.json({
            ...review,
            id: review.id.toString(),
            user_id: review.user_id.toString(),
            product_id: review.product_id.toString(),
            product_variant_id: review.product_variant_id.toString()
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get product review"
        });
    }
}


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


export {
    createProductReview,
    getProductReviews,
    getProductReview,
    deleteProductReview
};