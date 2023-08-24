import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';
import Company from '../models/CompanyModel.js';
import Skills from '../models/skillsModel.js';
import bcrypt from 'bcryptjs'



export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        const company = await Company.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ id: user._id, role: "user" }, process.env.JWT_SECRET, {
                expiresIn: '30d'
            })
            res.cookie('x-auth-token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            })
            res.status(201).json({ user, token })

        } else if (company && (await bcrypt.compare(password, company.password))) {
            const token = jwt.sign({ id: company._id, role: "company" }, process.env.JWT_SECRET, {
                expiresIn: '30d'
            })
            res.cookie('x-auth-token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            })
            res.status(201).json({ user: company, token })
        }
        else {
            res.status(400).json({ message: "Invalid Email or Password!" })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
})
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, phone, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
        const prev = await User.findOne({ email })
        if (prev) {
            res.status(400).json({ message: "User Already Exists!" })
        } else {
            const user = await User.create({
                name,
                email,
                phone,
                password: hashedPassword
            })
            await user.save();
            res.status(201).json({ message: "User Created Successfully!", success: true })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
})
export const verifyProfile = asyncHandler(async (req, res) => {
    try {
        if (req.user.role === "user") {
            const user = await User.findById(req.user.id)
            res.status(200).json({ user, success: true, role: "user" })
        } else if (req.user.role === "company") {
            const company = await Company.findById(req.user.id)
            res.status(200).json({ user: company, success: true, role: "company" })
        }
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
});

export const addSkills = asyncHandler(async (req, res) => {
    const skills = [
        "Programming Languages",
        "Algorithm Design and Analysis",
        "Data Structures",
        "Object-Oriented Programming (OOP)",
        "Functional Programming",
        "Database Management",
        "SQL",
        "NoSQL",
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
        "Front-End Frameworks (e.g., React, Angular)",
        "Back-End Development",
        "API Design and Development",
        "Version Control (e.g., Git)",
        "Continuous Integration and Deployment",
        "Containerization (e.g., Docker)",
        "Cloud Computing (e.g., AWS, Azure, GCP)",
        "Networking",
        "Operating Systems",
        "Cybersecurity",
        "Cryptography",
        "Artificial Intelligence (AI)",
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Big Data Technologies",
        "Data Analysis",
        "Data Visualization",
        "Software Testing and QA",
        "Agile Methodologies",
        "Scrum"
      ]
      
      try {
        skills.forEach(async (skill) => {
          await Skills.create({skill})
        })
        res.status(200).json({success: true})
      } catch (error) {
        console.log(error)
        res.status(500).json({error})
      }
    })