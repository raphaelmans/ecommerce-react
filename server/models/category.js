const mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({

  category: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    }
  ],
});

module.exports = mongoose.model("Category", CategorySchema);
