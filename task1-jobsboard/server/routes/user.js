import express from "express";
import { login, registerUser, verifyProfile, addSkills, registerCompany, postJob, getSkilss,
    companyDetails
 } from "../controllers/user.js";
import { verifyUser } from '../middleware/verifyUser.js'

const router = express.Router();


router.post("/register-user", registerUser);
router.post("/register-company", registerCompany);
router.get("/company-details", verifyUser,companyDetails);
router.post("/login", login);
router.get("/verify", verifyUser, verifyProfile);
router.post("/add-skills", addSkills)
router.get("/get-skills", getSkilss)
router.post("/post-job", verifyUser, postJob);


export default router;