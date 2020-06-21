import React,{useState, useEffect} from "react";
import { Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { Box } from "@material-ui/core";
import ActionElements from "./actionquery"
const useStyles = makeStyles({
  priceColor: {
    color: "#888",
  },
  dividerStyles: {
    margin: "2em 0",
  },
  descriptionStyles: {
    lineHeight: 1.6,
  },
});

const itemDetails = {
  itemName: "Originals Kaval Windbreaker Winter Jacket",
  stars: 5,
  price: 19.12,
  description:
    "Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.",
};

export default function ProductDetails({productDetails}) {



  console.log(typeof productDetails.itemDescription)
  const classes = useStyles();
  
  var editDescription = itemDetails.description.split(".");

  if(productDetails.itemDescription && productDetails.itemDescription.length > 0){
    editDescription = productDetails.itemDescription.split(".");
  }
  const stars = productDetails.itemRating || 5;
  console.log(stars)
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {productDetails.itemName}
      </Typography>
      <Box my={1.2}>
        <Rating
          name="read-only"
          size="small"
          value={stars}
          readOnly
        />
      </Box>
      <Typography className={classes.priceColor} variant="h5" gutterBottom>
        ${productDetails.itemPrice ? (productDetails.itemPrice).toFixed(2) : "N/A"}
   
      </Typography>
      <Divider className={classes.dividerStyles} />
      <div style={{display:"flex",overflow:"auto",maxHeight:250}}>
        <Typography
          variant="body2"
          className={classes.descriptionStyles}
          gutterBottom
        >
        { productDetails.itemDescription && productDetails.itemDescription.length > 0 ? productDetails.itemDescription.split("\n").map((sentence)=>(<p>{sentence}</p>)) : productDetails.itemDescription}
        </Typography>
      </div>
      <Divider className={classes.dividerStyles} />
      <ActionElements productDetails={productDetails}></ActionElements>
    </div>
  );
}
