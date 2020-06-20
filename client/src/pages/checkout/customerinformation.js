import React from "react";
import { Grid,Divider,TextField,Box,Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function CustomerInformation({nextstep,prevstep,handleCustomerInfo,customerInfo,shippingAddress,handleShippingAddress}) {

  
  const handleChangeInfo = (e) =>{
    handleCustomerInfo(e);
  }

  const handleChangeShip = (e) =>{
    handleShippingAddress(e);
  }


  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1em 0",
        }}
      >
        <span>Customer Information</span>
        <span>
          Already have an account? <Link>Login</Link>
        </span>
      </div>
      
      <Grid container spacing={2}>
        <Grid item xs="12">
      <TextField variant="outlined" name="email" fullWidth placeholder="Email" onChange={handleChangeInfo} value={customerInfo.email} ></TextField>
        </Grid>
        <Grid item xs="6">
          <TextField
            variant="outlined"
            fullWidth
            placeholder="First Name"
            name="firstName"
            onChange={handleChangeInfo} value={customerInfo.firstName}
          ></TextField>
        </Grid>
        <Grid item xs="6">
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Last Name"
            name="lastName"
            onChange={handleChangeInfo} value={customerInfo.lastName}
          ></TextField>
        </Grid>
      </Grid> 
      <Box mt={2}>
      <Divider />
      </Box>
      <span style={{ display: "block", margin: "1em 0" }}>
        Shipping Address
      </span>

      <Grid container spacing={2}>
        <Grid item xs="10">
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Address"
            name="address"
            onChange={handleChangeShip}
            value={shippingAddress.address}
          ></TextField>
        </Grid>
        <Grid item xs="2">
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Apt. Optional"
            name="apt"
            onChange={handleChangeShip}
            value={shippingAddress.apt}
          ></TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs="5">
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Country"
            name="country"
            onChange={handleChangeShip}
            value={shippingAddress.country}
          ></TextField>
        </Grid>
        <Grid item xs="5">
          <TextField
            variant="outlined"
            fullWidth
            placeholder="City"
            name="city"
            onChange={handleChangeShip}
            value={shippingAddress.city}
          ></TextField>
        </Grid>
        <Grid item xs="2">
          <TextField variant="outlined" fullWidth placeholder="Zip" name="zip" value={shippingAddress.zip}
            onChange={handleChangeShip}></TextField>
        </Grid>
      </Grid>
      <Box mt={2} mb={2}>
        <Divider />
      </Box>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to="/viewcart"
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={prevstep}
        >
          <div style={{display:"flex",alignItems:"center"}}>
          <ArrowBackIosIcon/>
          Return to Cart
          </div>
        </Link>
        <Button variant="outlined" color="primary" onClick={nextstep}>
          Continue to Shipping Method
        </Button>
      </div>
    </React.Fragment>
  );
}
