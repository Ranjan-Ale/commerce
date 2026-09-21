import { prisma } from "../config/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function register(req, res) {
    try {
        const { username, name, email, password } = req.body;

        const user = await prisma.users.findUnique({
            where: {
                email
            }
        });

        if (user) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const hash = await bcrypt.hash(password, 10);

        const createdUser = await prisma.users.create({
            data: {
                username,
                name,
                email,
                password: hash
            }
        });


        return res.status(201).json({
            message: "Registration successful",
            user: {
                id: createdUser.id.toString(),
                username: createdUser.username,
                name: createdUser.name,
                email: createdUser.email
            }
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });
    }
}


async function login(req, res) {
    try {
        const { email, password } = req.body;

        const user = await prisma.users.findUnique({
            where: {
                email
            }
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }
  
        const token = jwt.sign(user, process.env.SECRET_KEY)

        res.cookie("token", token)


        return res.status(200).json({
            success: true,
            message: "Login successful",
            token: token
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

export { register, login };