import express from "express";
const router = express.Router()
import { prisma } from "../config/database.js";
import { register, login } from "../controllers/authController.js"
import { authenticate } from "../middleware/authMiddleware.js"


router.get("/u", async (req,res)=>{
    const user = await prisma.users.findUnique({
        where:{
            email: "ram@.com"
        }
    })
    res.send(user)
})

router.get("/", async (req, res)=>{
    const users = await prisma.users.findMany();
   
    res.json(users);
})

router.post("/register", register);
router.post("/login", login);
router.get("/addtocart", authenticate, (req,res)=>{
    res.json({
        message: "welcome to dashboard",
        user: req.user
    })
})

export { router as userRouter}