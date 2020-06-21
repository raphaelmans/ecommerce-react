import React from "react";
import { Grid,Divider,TextField,Box,Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CountryBox from "../../components/countrybox";

export default function CustomerInformation({nextstep,prevstep,handleCustomerInfo,customerInfo,shippingAddress,handleShippingAddress,handleCountryField}) {

  
  const [tag,setTag] = React.useState(0);
 

  const handleChangeInfo = (e) =>{
    handleCustomerInfo(e);
  }

  const handleChangeShip = (e) =>{
    handleShippingAddress(e);
  }



  const checkFields = () =>{
    setTag(1)
    var ctr = 0; 
    Object.keys(customerInfo).forEach(item=>{
      if(customerInfo[item]){
        ctr++;
      }
    });
    Object.keys(shippingAddress).forEach(item=>{
      if(shippingAddress[item] && item != "apt"){
        ctr++;
      }
    });
    console.log(ctr);
    if(ctr === 7)
       nextstep();
    
     
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
      <TextField 
       error = { tag === 1 && (customerInfo.email  === undefined || customerInfo.email.length < 1) ?  true :  false}
      variant="outlined" name="email" fullWidth placeholder="Email" onChange={handleChangeInfo} value={customerInfo.email} ></TextField>
        </Grid>
        <Grid item xs="6">
          <TextField
            error = { tag === 1 && (customerInfo.firstName  === undefined || customerInfo.firstName.length < 1) ?  true :  false}
            variant="outlined"
            fullWidth
            placeholder="First Name"
            name="firstName"
            onChange={handleChangeInfo} value={customerInfo.firstName}
          ></TextField>
        </Grid>
        <Grid item xs="6">
          <TextField
            error = { tag === 1 && (customerInfo.lastName  === undefined || customerInfo.lastName.length < 1) ?  true :  false}
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
           error = { tag === 1 && (shippingAddress.address  === undefined || shippingAddress.address.length < 1) ?  true :  false}
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
          {/* <TextField
            error = { tag === 1 && (shippingAddress.country  === undefined || shippingAddress.country.length < 1) ?  true :  false}
            variant="outlined"
            fullWidth
            placeholder="Country"
            name="country"
            onChange={handleChangeShip}
            value={shippingAddress.country}
          ></TextField> */}
          <CountryBox handleCountryField={handleCountryField} value={shippingAddress.country}/>
        </Grid>
        <Grid item xs="5">
          <TextField
            error = { tag === 1 && (shippingAddress.city  === undefined || shippingAddress.city.length < 1) ?  true :  false}
            variant="outlined"
            fullWidth
            placeholder="City"
            name="city"
            onChange={handleChangeShip}
            value={shippingAddress.city}
          ></TextField>
        </Grid>
        <Grid item xs="2">
          <TextField 
           error = { tag === 1 && (shippingAddress.zip  === undefined || shippingAddress.zip.length < 1) ?  true :  false}
          variant="outlined" fullWidth placeholder="Zip" name="zip" value={shippingAddress.zip}
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
        <Button variant="outlined" color="primary" onClick={checkFields}>
          Continue to Shipping Method
        </Button>
      </div>
    </React.Fragment>
  );
}
