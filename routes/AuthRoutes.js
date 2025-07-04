import {get} from "mongoose";
import { register, login, logout, getUserData } from "../controller/Auth.js";


import express from "express";
import { EditProfile } from "../controller/profile.js";
const AuthRoutes = express.Router()

//user registration route
AuthRoutes.post("/register",register)
AuthRoutes.post("/login", login)
AuthRoutes.post("/logout",logout)
AuthRoutes.get("/getUserData/:id", getUserData)

export default AuthRoutes;  