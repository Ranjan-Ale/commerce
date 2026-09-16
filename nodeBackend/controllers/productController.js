import { prisma } from "../config/database.js";

async function show(req,res){
    try{
        const products = await prisma.products.findMany()
        if (products.length === 0){
            res.status(201).json({
                "message": "no products available"
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


async function add(req, res){
    try{
        const {name, slug, description} = req.body;
        const product = await prisma.products.findUnique({
            where: {
                name: name
            }
        })
        if(product){
            return res.status(402).json({
                message: "product exists"
            })
        }
        
        else{
            const created_products = await prisma.products.create({
                data:{
                    name,
                    slug,
                    description
                }
            })
            return res.status(403).json({
                message: created_products
            })

        }
    }
    catch(error){
        return res.status(500).json({
            message: "internal server error"
        })
    }
}



export { add, show }