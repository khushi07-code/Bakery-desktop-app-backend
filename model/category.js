const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
});
const Category = mongoose.model("category", categorySchema);

module.exports = Category;