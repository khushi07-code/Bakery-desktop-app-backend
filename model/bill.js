const mongoose = require("mongoose");
const ProductSchema = require("./product");

const BillSchema = new mongoose.Schema({
  bill_no: {
    type: String,
    required: true,
    unique: true
  },

  date: {
    type: String,
    required: true
  },

  user: {
    type: String,
    required: true
  },

  payment_mode: {
    type: String,
    required: true
  },

  cart: {
    type: Map,
    of: {
      product: ProductSchema,
      qty: {
        type: Number,
        required: true
      }
    },
    required: true
  },

  subtotal: Number,
  discount: Number,
  taxable: Number,
  cgst: Number,
  sgst: Number,
  grand_total: Number
});

const Bill = mongoose.model("Bill", BillSchema);
module.exports = Bill;