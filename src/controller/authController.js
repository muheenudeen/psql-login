import prisma from "../../index.js";
import { hashPassword } from "../utils/bcrypt.js";



export const register = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const existingUser = await prisma.user.findFirst({
            where: { email }
        });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await hashPassword(password);
        const newUser = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                email
            }
        });
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
