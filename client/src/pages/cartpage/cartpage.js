import React,{useContext,useState} from 'react'
import { Grid,Typography,Box,Divider, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {GlobalContext} from "../../context/globalstates"

import ItemViewCart from "../../components/itemviewcart"
const useStyles = makeStyles({
    productHeight:{
        height: 400,
    },
    itemStyles:{
        display:"flex",
        alignItems:"center",
        margin:"10px 0 10px 0"
    }
})

export default function CartPage() {
    const classes = useStyles();
    const { itemsOnCart } = useContext(GlobalContext);
    var subTotal = 0;
  

    for (var item of itemsOnCart){
        subTotal += item.itemPrice * item.itemQty
    }
    return (
        <Box mt={5}>
            <Grid container>
                <Grid item xs="8" container>
                    <Grid item xs="12"><Typography variant="h4">Your Cart <Divider/></Typography></Grid>
                   
                    {/* second section */}
                    <Grid container >
                        <Grid item xs="8">Item</Grid>
                        <Grid item xs="2">Price</Grid>
                        <Grid item xs="2">Quantity</Grid>
                        <Grid item xs="12"><Divider/></Grid>
                        </Grid>
                    {/* third section */}
                   <Grid item xs="12" container className={classes.productHeight}>
                       {itemsOnCart.map(item =>(
                        
                        <ItemViewCart item={item}/>
                        
                        ))}
                    </Grid>
                    <Grid container>
                        <Grid item xs="12"><Divider/></Grid>
                    <Grid container item xs="12" direction="row-reverse"><span>Subtotal: <strong>${subTotal.toFixed(2)}</strong></span></Grid>
                    </Grid>
                </Grid>
                <Grid item xs="4" >
                    <Box ml={5}>
                        <Grid item xs="12"><Typography variant="h5">Summary ({itemsOnCart.length} item)</Typography></Grid>
                        
                        <Grid container>
                             <Grid item xs="8">Subtotal</Grid>
                             <Grid item xs="4">${subTotal.toFixed(2)}</Grid>
                        </Grid>
                        <Grid container>
                             <Grid item xs="8">Shipping</Grid>
                             <Grid item xs="4">-</Grid>
                        </Grid>
                        <Grid container>
                             <Grid item xs="8">Est. Taxes</Grid>
                             <Grid item xs="4">-</Grid>
                             <Grid item xs="12"><Divider/></Grid>
                        </Grid>
                        <Grid container>
                             <Grid item xs="8"><Typography variant="h6">Total</Typography></Grid>
                             {/* TODO: REPLACE WITH TOTAL COST INCLUDING SHIPPING FEE AND ETC */}
                             <Grid item xs="4"><Typography variant="h6">${subTotal.toFixed(2)}</Typography></Grid>
                             <Grid item xs="12"><Button variant="contained" color="primary" fullWidth>Checkout</Button></Grid>
                        </Grid>
                        </Box>
                </Grid>
            </Grid>
            
        </Box>
    )
}
