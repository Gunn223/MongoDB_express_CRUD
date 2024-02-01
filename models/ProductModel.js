const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;
