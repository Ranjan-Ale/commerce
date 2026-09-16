import { prisma } from "../config/database.js"

async function add(req, res){
    try{
        const {user_id, cart_id, amount, order_status, remarks, cancel_reason} = req.body
        const user_id = await prisma.orders.findFirst({
            where:{
                user_id: user_id
            }
        })
       
        if (user_id.length > 1){
            res.status(409).json({
                message: "error"
            })
        }
        else{
            const neworder = await prisma.order.create({
                data:{
                    user_id, 
                    cart_id,
                    amount,
                    order_status,
                    remarks,
                    cancel_reason
                }
            })
            res.status(201).json({
                created: neworder
            })
        }
    }
    catch(error){
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

async function show(req,res){
    try{
        const order = await prisma.orders.findMany()
        if (order.length === 0){
            res.status(201).json({
                "message": "orders not available"
            })
        }
        else{
            res.status(200).json({
                "message": order
            })
        }
    }
    catch(error){
        res.status(500).json({
            "message": "internal server error"
        })
    }
}
export {add, show}