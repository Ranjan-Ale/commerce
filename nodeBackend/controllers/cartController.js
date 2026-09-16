import { prisma } from "../config/database.js"

async function addToCart(){
    return {message :"add to cart"}
}

export { addToCart}

// async function add(req, res){
//     try{
//         const {user_id} = req.body
//         if (user_id){
//             res.status(200).json({
//                 "message": "user is present"
//             })
//         }

//     }
//     catch(error){
//         return res.status(500).json({
//             message: "internal server error"
//         })
//     }
// }

// async function show(req,res){
//     try{
//         const products = await prisma.product_variants.findMany()
//         if (products.length === 0){
//             res.status(201).json({
//                 "message": "product variants not available"
//             })
//         }
//         else{
//             res.status(200).json({
//                 "message": products
//             })
//         }
//     }
//     catch(error){
//         res.status(500).json({
//             "message": "internal server error"
//         })
//     }
// }
// export {add, show}