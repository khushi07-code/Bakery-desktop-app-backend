const dotenv=require("dotenv");
dotenv.config();
const express= require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
const mongoose=require('mongoose');
const User = require("./model/user");
const Product =require("./model/product");
const Category=require("./model/category");
app.use(cors("*"));

async function main(){
    await mongoose.connect(MONGO_DB);
}

main().then((msg) => {
  console.log("DB connected");
}).catch((error) => {
  console.log(error);
});

app.post("/login",async(req,res)=>{
    let {email,password}= req.body;
    console.log(email,password)
    if(email && password){
        let result=await User.findOne({email:email});
        console.log(result)
        if(result){
            res.json({ message: "Login success" });
        }else{
           res.status(401).json({ message: "Invalid credentails" });
        }
    }else{
        if(!email){
            res.json("enter email");
        }else{
            res.json("enter the credentials");
        }
    }
});

app.get("/product",async(req,res)=>{
    let product=await Product.find({});
    res.json(product);
});

app.get("/category",async(req,res)=>{
    let category=await Category.find({});
    res.json(category);
})

app.listen("3000",()=>{
    console.log("listening.........");
})