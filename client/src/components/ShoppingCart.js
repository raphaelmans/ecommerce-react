import React, { useState,useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ItemsOnCart from "./itemsoncart"
import Button from "@material-ui/core/Button";
import {GlobalContext} from "../context/globalstate";



const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
    width: 250,
  },
  avatar: {
    margin: "0 10px 0 0 ",
  },
  buttonStyles: {
    marginTop: 10,
   
  },
}));

export default function ShoppingCart() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { itemsOnCart } = useContext(GlobalContext);
  

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div>
      <IconButton
        color="primary"
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
      >
        <ShoppingCartIcon />
      </IconButton>

      <Popover
      
        id="mouse-over-popover"
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        keepMounted
      >
        <Typography variant="subtitle1">Item Added to Cart</Typography>

        <Divider />
        <div style={{ display: "flex", margin: "5px 5px 0 0" ,flexDirection:"column"}}>
       
         {itemsOnCart && itemsOnCart.length > 0 ?   itemsOnCart.map(item => (
            <ItemsOnCart item={item}/>
          )): <span>Nothing inside your cart</span>}
        
        
        </div>

        <div style={{display:"flex",justifyContent:"space-between", marginTop:10}}>
          <Button variant="contained" size="small">
            View Cart
          </Button>
          <Button variant="contained" size="small" color="primary">
            Checkout
          </Button>
        </div>
      </Popover>
    </div>
  );
}
