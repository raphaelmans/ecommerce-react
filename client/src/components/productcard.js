import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: "center",
    textDecoration:"none",
    height:450
  },
  media: {
    height: 300,
  },
  itemName:{
    wordWrap:"break-word"
  }
});

export default function MediaCard({ productDetails, urls }) {
  const classes = useStyles();


  return (
    <Link to={`/${urls.category}/${urls.subcategory}/${productDetails._id}`} params={{productDetails}} style={{ color: 'inherit', textDecoration: 'inherit'}}> 
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              productDetails.itemImage
                ? productDetails.itemImage
                : "https://source.unsplash.com/random"
            }
            title={productDetails.itemName}
          />
          <CardContent className={classes.shit}>
            <div style={{height:50,wordWrap: "break-word",wordBreak: "break-all"}}>
            <Typography gutterBottom variant="subtitle1">
              {productDetails.itemName.length > 60 ? productDetails.itemName.slice(0,60)+"..." : productDetails.itemName.replace("\n"," ")}
            </Typography>
            </div>
            <Box component="fieldset" borderColor="transparent">
              <Rating
                name="read-only"
                value={productDetails.itemRating}
                readOnly
              />
            </Box>
            <Typography variant="caption">
             ₱{productDetails.itemPrice}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
