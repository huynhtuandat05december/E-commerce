const mongoose = require('mongoose');
const shortid = require("shortid");

const productSchema = mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
})
module.exports = mongoose.model('Products', productSchema);