import { prisma } from "../config/database.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
    try {
        const {
            user_id,
            cart_id,
            amount,
            order_status,
            remarks,
            cancel_reason
        } = req.body;

        const order = await prisma.orders.create({
            data: {
                user_id: BigInt(user_id),
                cart_id: BigInt(cart_id),
                amount: amount ?? 0,
                order_status: order_status ?? "pending",
                remarks: remarks ?? null,
                cancel_reason: cancel_reason ?? null
            }
        });

        res.status(201).json({
            message: "Order created successfully",
            order
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to create order",
            error: error.message
        });
    }
};


// GET ALL ORDERS
export const getOrders = async (req, res) => {
    try {
        const orders = await prisma.orders.findMany({
            orderBy: {
                created_at: "desc"
            }
        });

        res.status(200).json({
            message: "Orders fetched successfully",
            orders
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch orders",
            error: error.message
        });
    }
};


// GET SINGLE ORDER
export const getOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const order = await prisma.orders.findUnique({
            where: {
                id: BigInt(id)
            }
        });

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json({
            message: "Order fetched successfully",
            order
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch order",
            error: error.message
        });
    }
};


// UPDATE ORDER
export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            user_id,
            cart_id,
            amount,
            order_status,
            remarks,
            cancel_reason
        } = req.body;

        // Check if order exists
        const existingOrder = await prisma.orders.findUnique({
            where: {
                id: BigInt(id)
            }
        });

        if (!existingOrder) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        // Update order
        const updatedOrder = await prisma.orders.update({
            where: {
                id: BigInt(id)
            },
            data: {
                user_id: BigInt(user_id),
                cart_id: BigInt(cart_id),
                amount: amount,
                order_status: order_status,
                remarks: remarks || null,
                cancel_reason: cancel_reason || null
            }
        });

        return res.status(200).json({
            message: "Order updated successfully",
            order: updatedOrder
        });

    } catch (error) {
        console.error("Error updating order:", error);

        return res.status(500).json({
            message: "Failed to update order",
            error: error.message
        });
    }
};


// DELETE ORDER
export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const order = await prisma.orders.delete({
            where: {
                id: BigInt(id)
            }
        });

        res.status(200).json({
            message: "Order deleted successfully",
            order
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to delete order",
            error: error.message
        });
    }
};