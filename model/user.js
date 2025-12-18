const mongoose = require("mongoose")

let userSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String
    }
});


const User= mongoose.model("user",userSchema);

module.exports=User;