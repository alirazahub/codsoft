import express from "express";
import { login, registerUser,verifyProfile,addSkills } from "../controllers/user.js";
import { verifyUser } from '../middleware/verifyUser.js'

const router = express.Router();


router.post("/register-user", registerUser);
router.post("/login", login);
router.get("/verify", verifyUser, verifyProfile);
router.post("/add-skills", addSkills)


export default router;