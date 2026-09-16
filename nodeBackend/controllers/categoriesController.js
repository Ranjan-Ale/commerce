import { prisma } from "../config/database.js"

async function add(req, res){
    try{
        const {title, slug, description} = req.body
        const category = await prisma.product_variants.findMany({
            where:{
                title: title
            }
        })
       
        if (category.length > 0){
            res.status(409).json({
                message: "already exists"
            })
        }
        else{
            const newCategory = await prisma.categories.create({
                data:{
                   title,
                   slug, 
                   description
                }
            })
            res.status(201).json({
                created: newCategory
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
        const categories = await prisma.categories.findMany()
        if (categories.length === 0){
            res.status(201).json({
                "message": "Categories not available"
            })
        }
        else{
            res.status(200).json({
                "message": categories
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