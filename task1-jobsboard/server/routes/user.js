import express from "express";
import {
    login, registerUser, verifyProfile, addSkills, registerCompany, postJob, getSkilss,
    companyDetails, getJobs, getFavJob, getInCompanyJobs, shortlistCandidate,changeStatus,getAllCompanies,
    userProfile, removeJobFromFav, getCompanyActiveJobs, deleteCompanyJob,getShortlistedCandidate,
    updateUserProfile, addJobToFav, applyInJob, getAppliedJobs, updateCompanyProfile, UpdateCompanyJob, getCompanyAppliedJobs,
} from "../controllers/user.js";
import { verifyUser } from '../middleware/verifyUser.js'

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/register-company", registerCompany);
router.get("/all-companies", getAllCompanies);
router.get("/company-details", verifyUser, companyDetails);
router.put("/company-details", verifyUser, updateCompanyProfile)
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
router.post("/apply-in-job", verifyUser, applyInJob)
router.get("/get-applied-jobs", verifyUser, getAppliedJobs)

router.get("/company-active-jobs", verifyUser, getCompanyActiveJobs)
router.get("/company-all-jobs", verifyUser, getInCompanyJobs)
router.put("/company-job/:id", UpdateCompanyJob)
router.delete("/company-job/:id", deleteCompanyJob)
router.get("/company-applied-job", verifyUser, getCompanyAppliedJobs)
router.put("/shortlist-candidate", verifyUser, shortlistCandidate)
router.get("/shortlist-candidate", verifyUser, getShortlistedCandidate)

router.put("/change-status", verifyUser, changeStatus)

export default router;