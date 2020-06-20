import React from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ItemViewCart from "../../components/itemviewcart";

const useStyles = makeStyles({
  productHeight: {
    height: 400,
    overflow: "auto",
  },
  itemStyles: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0 10px 0",
  },
});

export default function CartItemList({ itemsOnCart, subTotal }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs="12">
        <Typography variant="h4">
          Your Cart <Divider />
        </Typography>
      </Grid>

      {/* second section */}
      <Grid container>
        <Grid item xs="8">
          Item
        </Grid>
        <Grid item xs="2">
          Price
        </Grid>
        <Grid item xs="2">
          Quantity
        </Grid>
        <Grid item xs="12">
          <Divider />
        </Grid>
      </Grid>
      {/* third section */}
      <Grid item xs="12" container className={classes.productHeight}>
        {itemsOnCart.map((item) => (
          <ItemViewCart item={item} />
        ))}
      </Grid>
      <Grid container>
        <Grid item xs="12">
          <Divider />
        </Grid>
        <Grid container item xs="12" direction="row-reverse">
          <span>
            Subtotal: <strong>${subTotal.toFixed(2)}</strong>
          </span>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
