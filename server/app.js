const express = require("express"),
  morgan = require("morgan"),
  app = express(),
  cors = require('cors');

const Product = require("./models/products"),
  Category = require("./models/category");

const PORT = process.env.PORT || 8000;
app.use(cors());
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan("tiny"));
app.use(express.json());



Category.create({category:"cables&adapters"});



app.get("/api/:category/", (req, res) => {
  Category.findOne({ category: req.params.category })
    .then((foundCategory) => {
      //Use the parameter to obtain category id
      //list all the products of the specific category identified
      Category.findById(foundCategory._id)
        .populate("products")
        .exec((err, productList) => {
          if (err) console.log(error);
          else res.send(productList.products);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/newitem", (req, res) => {
  const newProduct = req.body.itemDetails;
  Category.findOne({ category: req.body.category})
    .then((foundCategory) => {
      Category.findById(foundCategory._id)
        .then((category) => {
          //Category found then append product
          console.log(category);

          Product.create(newProduct)
            .then((product) => {
              console.log(product);
              category.products.push(product);
              category.save();
              
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/api/:category/:id",(req,res)=>{
    Product.findById(req.params.id).then(product=>res.send(product)).catch(err=>console.log(err));
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
