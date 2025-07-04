import express from "express";
import {getUserData, EditProfile} from "../controller/profile.js";
import { authMiddleWare } from "../middleware/authMiddleware.js";

const ProfileRoutes = express.Router()

ProfileRoutes.get("/getUserData/:id", authMiddleWare, getUserData);
ProfileRoutes.put("/editProfile/:id", authMiddleWare, EditProfile);  

export default ProfileRoutes;  