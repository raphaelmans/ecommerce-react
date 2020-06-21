import React,{useState,useContext} from 'react'
import { Divider, Grid,Typography,Box,Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ShowForm from './showform'
import {GlobalContext} from "../../context/globalstates"

const shippingCompany = [
    {
      companyName: "Ninja Van",
      fee: 2,
    },
    {
      companyName: "LBC",
      fee: 3,
    },
    {
      companyName: "Shopee",
      fee: 2.5,
    },
  ];


export default function Checkout() {


    const { itemsOnCart } = useContext(GlobalContext);
    var subTotal = 0;
  
    for (var item of itemsOnCart) {
      subTotal += item.itemPrice * item.itemQty;
    }
   

   
    const [shippingMode, setModeShip] = useState(shippingCompany[0].companyName);
    var shippingFee = shippingCompany.filter((item)=>{return item.companyName ===shippingMode}) || 0;
    const setShipMethod = (event) => {
      setModeShip(event.target.value);
    };

    var totalFee = subTotal + shippingFee[0].fee;

 


    return (

        <Box mt={5}>
        <Grid container>
            {/* ADD BREADCRUMB */}
            <Grid item xs={8}>
                <Divider/>
                <ShowForm subTotal={subTotal} totalFee={totalFee} shippingMode={shippingMode} setShipMethod={setShipMethod} />
            </Grid>
            <Grid item xs={4} container fullWidth>
                {/* TODO ADD SUMMARY COMPONENT */}
                        <Box ml={5}>
                        <Grid item xs="12"><Typography variant="h5">Summary </Typography></Grid>
                        
                        <Grid container>
                             <Grid item xs="8">Subtotal</Grid>
    <Grid item xs="4">${subTotal.toFixed(2)}</Grid>
                        </Grid>
                        <Grid container>
                             <Grid item xs="8">Shipping</Grid>
    <Grid item xs="4">${shippingFee[0].fee.toFixed(2)}</Grid>
                        </Grid>
                        <Grid container>
                             <Grid item xs="8">Est. Taxes</Grid>
                             <Grid item xs="4">-</Grid>
                        </Grid>
                        <Divider/>
                        <Grid container direction="column" spacing={1}>
                           <Grid item xs={12} ><Typography variant="body1">Gift card or discount code</Typography></Grid>
                            <Grid item xs={12} container><TextField size="small" variant="outlined"
            ></TextField><Button variant="outlined" >Apply</Button> </Grid>
                        </Grid>
                        <Box mt={1} mb={1}>
                         <Divider/>
                        </Box>
                        <Grid container>
                             <Grid item xs="8"><Typography variant="h6">Total</Typography></Grid>
                             {/* TODO: REPLACE WITH TOTAL COST INCLUDING SHIPPING FEE AND ETC */}
                             <Grid item xs="4"><Typography variant="h6">${totalFee.toFixed(2)}</Typography></Grid>
                        </Grid>
                        </Box>
            </Grid>
            
        </Grid>
        </Box>
    )
}
