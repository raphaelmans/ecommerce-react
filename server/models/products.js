const mongoose = require('mongoose');



var ProductSchema = new mongoose.Schema({

    itemName: String,
    itemRating: Number,
    itemPrice: Number,
    itemDescription: String,
    itemImage:String

});


module.exports = mongoose.model("Product", ProductSchema);