import express from "express";
import {
    login, registerUser, verifyProfile, addSkills, registerCompany, postJob, getSkilss,
    companyDetails, getJobs,getFavJob,
    userProfile, removeJobFromFav,
    updateUserProfile, addJobToFav
} from "../controllers/user.js";
import { verifyUser } from '../middleware/verifyUser.js'

const router = express.Router();


router.post("/register-user", registerUser);
router.post("/register-company", registerCompany);
router.get("/company-details", verifyUser, companyDetails);
router.post("/login", login);
router.get("/verify", verifyUser, verifyProfile);
router.post("/add-skills", addSkills)
router.get("/get-skills", getSkilss)
router.post("/post-job", verifyUser, postJob);
router.get("/user-profile", verifyUser, userProfile);
router.put("/user-profile", verifyUser, updateUserProfile);
router.get("/get-jobs", getJobs)
router.put("/add-job-to-fav", verifyUser, addJobToFav)
router.get("/get-fav-jobs", verifyUser, getFavJob)
router.put("/remove-job-from-fav", verifyUser, removeJobFromFav)


export default router;