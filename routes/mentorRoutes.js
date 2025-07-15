import express from "express"
import { addMentor } from "../controller/mentorController.js"

const mentorRoutes = express.Router()

mentorRoutes.post("/addMentor", addMentor )

export default mentorRoutes