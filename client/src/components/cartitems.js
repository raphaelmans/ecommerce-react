import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: "0 10px 0 0 ",
  },
}));
export default function ItemsOnCart({ item }) {
    const classes = useStyles();
  return (
    <div style={{display:"flex",marginBottom:10}}>
      <Avatar
        variant="square"
        className={classes.avatar}
        src={item.itemImage}
      ></Avatar>
      {/* Bird Nerd T-shirt <br />
          Qty:1 | $20 */}
      {item.itemName}
      <br />
      Qty:{item.itemQty} | ₱{item.itemPrice}
      <br />
    </div>
  );
}
