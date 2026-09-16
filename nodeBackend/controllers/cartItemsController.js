import { prisma } from "../config/database.js"

async function add(req, res){
    try{
        const {product_id, product_variant_id, quantity} = req.body
        const variant = await prisma.cart_items.findMany({
            where:{
                variant_name: name
            }
        })
       
        if (variant.length > 0){
            res.status(409).json({
                message: "already exists"
            })
        }
        else{
            const newVariant = await prisma.product_variants.create({
                data:{
                    variant_name : name,
                    variant_type : type,
                    variant_value : value,
                    description : description
                }
            })
            res.status(201).json({
                created: newVariant
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
        const products = await prisma.product_variants.findMany()
        if (products.length === 0){
            res.status(201).json({
                "message": "product variants not available"
            })
        }
        else{
            res.status(200).json({
                "message": products
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