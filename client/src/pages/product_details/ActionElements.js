import React, { useState, useContext } from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { GlobalContext } from "../../context/globalstates";
import CheckIcon from "@material-ui/icons/Check";
const buttonStyle = makeStyles({
  root: {
    padding: 0,
  },
  cartButton: {
    marginLeft: "2em",
    borderRadius: 15,
  },
  noHover: {
    display: "flex",
    padding: 0,
    color: "black",
    "&:hover": {
      cursor: "pointer",
      color: "#3f51b5",
    },
  },
});
function ActionElements({productDetails}) {
  const classes = buttonStyle();
  const [count, setCount] = useState(1);
  const [favorite, addFavorite] = useState(false);
  const { addToCart, removeFromCart } = useContext(GlobalContext);
  const [itemOnCart, itemAdded] = useState(0);
  const color = itemOnCart ? "primary" : "";
  const wishlistColor = "";
  const ToggleCartEvent = () => {
    const addItem = {
      id: productDetails._id,
      itemName: productDetails.itemName,
      itemQty: count,
      itemPrice: productDetails.itemPrice,
      itemImage:productDetails.itemImage
    };

 

    if (itemOnCart) {
      removeFromCart(addItem.id);
      itemAdded(0);
    } else {
      addToCart(addItem);
      itemAdded(1);
    }
  };

  const toggleFavorite = () => {
    addFavorite(!favorite);
  };
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          style={{ width: 100, padding: "0 1em" }}
          value={count}
        />
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical primary button group"
          className={classes.root}
        >
          <Button
            size="small"
            className={classes.root}
            onClick={() => setCount(count + 1)}
          >
            <ExpandLessIcon />
          </Button>
          <Button
            size="small"
            className={classes.root}
            onClick={() => {
              if (count > 1) setCount(count - 1);
            }}
          >
            <ExpandMoreIcon />
          </Button>
        </ButtonGroup>
        <Button
          variant="contained"
          className={classes.cartButton}
          onClick={ToggleCartEvent}
          color={color}
        >
          {itemOnCart ? (
            <span style={{ display: "flex" }}>
              Added To Cart <CheckIcon />
            </span>
          ) : (
            <span>+ Add To Cart</span>
          )}
        </Button>
      </div>
      <Box mt="2em" className={classes.noHover} onClick={toggleFavorite}>
        {favorite ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon />}
        <Typography>Add to Wishlist</Typography>
      </Box>
    </React.Fragment>
  );
}

export default ActionElements;
