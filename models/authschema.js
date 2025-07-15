import mongoose from "mongoose";


const authschema = new mongoose.Schema({
    name: {type:String, require:true},
    email: {type:String, require:true, unique:true},
    password:{type:String, require:true, unique:true},
    role: {type:String, require:true,
        enum: ["admin", "mentor","mentee"],
        default:"mentee"
     },

     bio:{type:String, default:""},
     skills:{type:String, },
     goal:{type:String, },
     
}, {timestamps:true},
  {minimize: false},

)

const Authmodel = mongoose.model.users || mongoose.model("users", authschema);   
export default Authmodel; 