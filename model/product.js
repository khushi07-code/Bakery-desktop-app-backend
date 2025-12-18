const mongoose = require("mongoose");
const Category = require("./category");

const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number
    },
    Weight: {
        type: Number
    },
    CategoryID: {
        type: mongoose.Types.ObjectId,
        ref: "category"
    },
    Code:{
        type:Number,
        required:true
    }

});
const Product = mongoose.model("product", productSchema);

module.exports = Product;