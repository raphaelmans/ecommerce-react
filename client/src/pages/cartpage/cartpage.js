import React, { useContext, useState } from "react";
import { Grid, Typography, Box, Divider, Button } from "@material-ui/core";
import { GlobalContext } from "../../context/globalstates";
import NavStyle from "../../sample.module.css";
import ItemViewCart from "../../components/itemviewcart";
import CartItemList from "./cartitemlist";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { itemsOnCart } = useContext(GlobalContext);
  var subTotal = 0;

  for (var item of itemsOnCart) {
    subTotal += item.itemPrice * item.itemQty;
  }
  return (
    <Box mt={5}>
      <Grid container>
        <Grid item xs="8" container>
          <CartItemList itemsOnCart={itemsOnCart} subTotal={subTotal} />
        </Grid>
        <Grid item xs="4">
          <Box ml={5}>
            <Grid item xs="12">
              <Typography variant="h5">
                Summary ({itemsOnCart.length} item)
              </Typography>
            </Grid>

            <Grid container>
              <Grid item xs="8">
                Subtotal
              </Grid>
              <Grid item xs="4">
                ${subTotal.toFixed(2)}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs="8">
                Shipping
              </Grid>
              <Grid item xs="4">
                -
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs="8">
                Est. Taxes
              </Grid>
              <Grid item xs="4">
                -
              </Grid>
              <Grid item xs="12">
                <Divider />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs="8">
                <Typography variant="h6">Total</Typography>
              </Grid>
              {/* TODO: REPLACE WITH TOTAL COST INCLUDING SHIPPING FEE AND ETC */}
              <Grid item xs="4">
                <Typography variant="h6">${subTotal.toFixed(2)}</Typography>
              </Grid>
              <Grid item xs="12">
                <Link to="/checkout" className={NavStyle.checkoutstyle}>
                  <Button variant="contained" color="primary" fullWidth>
                    Checkout
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
