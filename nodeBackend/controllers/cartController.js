import { prisma } from "../config/database.js";


// CREATE CART
async function createCart(req, res) {
    try {
        const { user_id } = req.body;

        const cart = await prisma.cart.create({
            data: {
                user_id: BigInt(user_id)
            }
        });

        res.status(201).json({
            message: "Cart created",
            cart: {
                ...cart,
                id: cart.id.toString(),
                user_id: cart.user_id.toString()
            }
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not create cart"
        });
    }
}


// GET ALL CARTS
async function getCarts(req, res) {
    try {
        const carts = await prisma.cart.findMany();

        const result = carts.map(cart => ({
            ...cart,
            id: cart.id.toString(),
            user_id: cart.user_id.toString()
        }));

        res.json(result);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get carts"
        });
    }
}


// GET ONE CART
async function getCart(req, res) {
    try {
        const id = BigInt(req.params.id);

        const cart = await prisma.cart.findUnique({
            where: {
                id: id
            }
        });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        res.json({
            ...cart,
            id: cart.id.toString(),
            user_id: cart.user_id.toString()
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not get cart"
        });
    }
}


// DELETE CART
async function deleteCart(req, res) {
    try {
        const id = BigInt(req.params.id);

        const cart = await prisma.cart.findUnique({
            where: {
                id: id
            }
        });

        if (!cart) {
            return res.status(404).json({
                message: "Cart not found"
            });
        }

        await prisma.cart.delete({
            where: {
                id: id
            }
        });

        res.json({
            message: "Cart deleted"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Could not delete cart"
        });
    }
}


export {
    createCart,
    getCarts,
    getCart,
    deleteCart
};