import express from "express";
import {
     onlineStatus, login, getUserProfile, getUserProfileById, register, changeVisibility,
     addImages, changePassword, changePrefrences, changePrivacy, deleteProfile, editPersonalProfile,
     addHobby, changeEmailAlerts, findMatches, findMatch, deleteImage, addRecentVisitors, addWhoViewed,
     addShortListed, addBlocked, addLikes, addAccepted, addDeclined, completeProfile, getNotifications,
     activitySummary, checkEmail, newPassword, decreaseContact, matchesNearMe, removeShortListed, removeBlocked,
     basicSearch, filterMatches, advanceSearch, searchByUserId,verifyAccount,changeWhatsapp
} from "../controllers/user.js";
import { verifyRegisterUser, verifyUser } from '../middleware/verifyUser.js'

const router = express.Router();


router.post("/register", register);
router.post("/create-profile", verifyRegisterUser, completeProfile);
router.post("/login", login);
router.get("/verify", verifyUser, getUserProfile);
router.get("/get-profile/:id", verifyUser, getUserProfileById);
router.put("/addImages", verifyUser, addImages);
router.put("/delete-image", verifyUser, deleteImage);
router.put("/change-password", verifyUser, changePassword);
router.put("/change-preferences", verifyUser, changePrefrences);
router.put("/change-privacy", verifyUser, changePrivacy);
router.put("/change-visibility", verifyUser, changeVisibility);
router.put("/change-personal-details", verifyUser, editPersonalProfile)
router.delete("/delete", verifyUser, deleteProfile);
router.put("/addHobby", verifyUser, addHobby);
router.put("/change-email-alerts", verifyUser, changeEmailAlerts)
router.get("/find-matches", verifyUser, findMatches)
router.get("/find-match/:id", verifyUser, findMatch)
router.put("/online-status", verifyUser, onlineStatus)
router.put("/add-recent-visitors", verifyUser, addRecentVisitors)
router.put("/add-who-viewed", addWhoViewed)
router.put("/add-short-listed", verifyUser, addShortListed)
router.put("/remove-short-listed", verifyUser, removeShortListed)
router.put("/add-blocked", verifyUser, addBlocked)
router.put("/un-block", verifyUser, removeBlocked)
router.put("/add-connection", verifyUser, addLikes)
router.put("/accept-request", verifyUser, addAccepted)
router.put("/reject-request", verifyUser, addDeclined)
router.get("/get-notifications", verifyUser, getNotifications)
router.get("/get-activity-summary", verifyUser, activitySummary)
router.post("/check-email", checkEmail)
router.put("/change-forget-password", newPassword)
router.put("/decrease-contact", verifyUser, decreaseContact)
router.get("/matches-nearme", verifyUser, matchesNearMe)
router.post("/basic-search", verifyUser, basicSearch)
router.post("/advance-search", verifyUser, advanceSearch)
router.get("/search-by-userId/:id", verifyUser, searchByUserId)
router.post("/filter-matches", verifyUser, filterMatches)
router.get("/verify-account", verifyUser, verifyAccount)
router.put("/change-whatsapp", verifyUser, changeWhatsapp)


export default router;