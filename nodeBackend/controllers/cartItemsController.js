import { prisma } from "../config/database.js";


// CREATE CART ITEM
async function createCartItem(req, res) {
    try {
        const {
            product_id,
            product_variant_id,
            quantity
        } = req.body;

        const cartItem = await prisma.cart_items.create({
            data: {
                product_id: BigInt(product_id),
                product_variant_id: BigInt(product_variant_id),
                quantity
            }
        });

        res.status(201).json({
            message: "Cart item created",
            cartItem: {
                ...cartItem,
                id: cartItem.id.toString(),
                product_id: cartItem.product_id.toString(),
                product_variant_id: cartItem.product_variant_id.toString()
            }
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not create cart item"
        });
    }
}


// GET ALL CART ITEMS
async function getCartItems(req, res) {
    try {
        const cartItems = await prisma.cart_items.findMany();

        const result = cartItems.map(item => ({
            ...item,
            id: item.id.toString(),
            product_id: item.product_id.toString(),
            product_variant_id: item.product_variant_id.toString()
        }));

        res.json(result);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get cart items"
        });
    }
}


// GET ONE CART ITEM
async function getCartItem(req, res) {
    try {
        const id = BigInt(req.params.id);

        const cartItem = await prisma.cart_items.findUnique({
            where: {
                id: id
            }
        });

        if (!cartItem) {
            return res.status(404).json({
                message: "Cart item not found"
            });
        }

        res.json({
            ...cartItem,
            id: cartItem.id.toString(),
            product_id: cartItem.product_id.toString(),
            product_variant_id: cartItem.product_variant_id.toString()
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get cart item"
        });
    }
}


// DELETE CART ITEM
async function deleteCartItem(req, res) {
    try {
        const id = BigInt(req.params.id);

        const cartItem = await prisma.cart_items.findUnique({
            where: {
                id: id
            }
        });

        if (!cartItem) {
            return res.status(404).json({
                message: "Cart item not found"
            });
        }

        await prisma.cart_items.delete({
            where: {
                id: id
            }
        });

        res.json({
            message: "Cart item deleted"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not delete cart item"
        });
    }
}


export {
    createCartItem,
    getCartItems,
    getCartItem,
    deleteCartItem
};