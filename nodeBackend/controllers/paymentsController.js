import { prisma } from "../config/database.js"

async function payment(req, res){
    if (req.user.id){
        const payment = await prisma.orders.findFirst({
            where:{
                user_id : req.user.id
            }
        })
        payment
    }
}

export { payment }