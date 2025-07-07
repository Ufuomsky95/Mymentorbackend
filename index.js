import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDb from "./config/mongodb.js";  
import AuthRoutes from "./routes/AuthRoutes.js";
import ProfileRoutes from "./routes/profileRoutes.js"
import cookieParser from "cookie-parser";
dotenv.config(); 
const app = express();

app.get("/", (req,res) =>{
    res.json({message:"Welcome to Backend"}) 
})


app.use(express.json());
app.use(cookieParser())

const allowOrigin =["https://mymentorfrontend.vercel.app", "http://localhost:5173"]
app.use(cors({
   origin:"allowOrigin",
   credentials:true,
   methods:["GET","PUT","DELETE","POST"],
   allowedHeaders:["content-type", "Authorization"]
}))
app.use("/api/auth",AuthRoutes) 

app.use("/api/profile", ProfileRoutes)


//connecting to database
    connectDb(); 


app.listen(8000, ()=> {
    console.log("Server is running") 
}

)