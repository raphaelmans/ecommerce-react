const express = require("express"),
  morgan = require("morgan"),
  app = express(),
  path = require("path"),
  cors = require('cors'),
  mongoose = require("mongoose");


const Product = require("./models/products"),
  Category = require("./models/category");

const PORT = process.env.PORT || 8000;


const mongoAtlasURL = "mongodb+srv://belzbuu:cn1JHu4208@mernstack-xitaw.mongodb.net/ecommerce?retryWrites=true&w=majority"

mongoose.connect(mongoAtlasURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connected");
});



app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());


// Category.create({category:"cables&adapters"});
// Category.create({category:"batteries"});
// Category.create({category:"cameras"});
// Category.create({category:"bags&cases"});
// Category.create({category:"hotcategories"});
// Category.create({category:"outerwear&jackets"});
// Category.create({category:"weddings&events"});
// Category.create({category:"bottoms"});
// Category.create({category:"tops&sets"});
// Category.create({category:"accessories"});
// Category.create({category:"computer"});
// Category.create({category:"jewelry&watches"});
app.use(express.static(path.join(__dirname,"../client/build")));



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
              res.end();
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


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
