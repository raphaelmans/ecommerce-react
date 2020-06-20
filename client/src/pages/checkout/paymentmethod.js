import React from "react";
import {
  Divider,
  Grid,
  Box,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Checkbox,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    padding: 0,
    margin: "6px 0",
  },
});
export default function PaymentMethod({
  nextstep,
  prevstep,
  handlePayment,
  payment,
  shippingAddress,
  shippingMode,
  editForm,
}) {
  const classes = useStyle();
  const [value, setValue] = React.useState("same");

  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangePayment = (e) =>{
    handlePayment(e)
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
                   <span>Shipping Address <span><strong>{shippingAddress.address}</strong></span></span> <Link onClick={()=>{editForm(1)}}style={{textDecoration:"none"}}>Edit</Link>

      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1em 0",
        }}
      >
        <span>
          Shipping Method <span><strong>{shippingMode}</strong></span>
        </span>{" "}
        <Link onClick={()=>{editForm(2)}} style={{ textDecoration: "none" }}>Edit</Link>
      </div>

      <Divider />
      <Box mt={2} mb={2}>
        <Grid container spacing={2}>
          <Grid item xs="10">
            <Typography variant="h6">Payment Method</Typography>
          </Grid>
          <Grid item xs="2">
            LOGOS
          </Grid>
          <Grid item xs="12">
            {" "}
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Card Number"
              name="cardNumber"
              value={payment.cardNumber}
              onChange={handleChangePayment}
            ></TextField>
          </Grid>

          <Grid item xs="6">
            {" "}
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Name On Card"
              name="name"
              value={payment.name}
              onChange={handleChangePayment}
            ></TextField>
          </Grid>
          <Grid item xs="4">
            {" "}
            <TextField
              variant="outlined"
              fullWidth
              placeholder="MM/YY"
              name="cardDate"
              value={payment.cardDate}
              onChange={handleChangePayment}
            ></TextField>
          </Grid>
          <Grid item xs="2">
            {" "}
            <TextField
              variant="outlined"
              fullWidth
              placeholder="CVV"
              name="cvv"
              value={payment.cvv}
              onChange={handleChangePayment}
            ></TextField>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Divider />
        </Box>
      </Box>
      <Box mt={2} mb={2}>
        <Typography variant="h6">Billing Address</Typography>

        <FormControl fullWidth="true" component="fieldset">
          <RadioGroup
            aria-label="shippingmethod"
            name="shippingmethod"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="same"
              control={<Radio color="primary" />}
              label="Same as shipping address"
            />
            <FormControlLabel
              value="different"
              control={<Radio color="primary" />}
              label="Use a different billing address"
            />
          </RadioGroup>
        </FormControl>

        <Typography variant="h6">Remember Me</Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
        <FormControlLabel
              className={classes.root}
        control={
          <Checkbox
          className={classes.root}
            checked={checked}
            onChange={handleCheckBox}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
        
          />
        }
        label="Save my information for a faster checkout"
          />
        </div>
        <Box mt={2}>
          <Divider />
        </Box>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1em 0",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={prevstep}
        >
             <div style={{display:"flex",alignItems:"center"}}>
          <ArrowBackIosIcon/>
          Return to Shipping Method
          </div>
        
        </Link>
        <Button variant="outlined" color="primary" onClick={nextstep}>
          Complete Order
        </Button>
      </div>
    </React.Fragment>
  );
}
