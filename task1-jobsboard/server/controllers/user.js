import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'



export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '30d'
            })
            res.cookie('x-auth-token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            })
            res.status(201).json({ user, token })

        } else {
            res.status(400).json({ message: "Invalid Email or Password!" })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
})
