import React from 'react'
import { Typography, Divider, Box, Grid } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
export default function CompleteOrder({subTotal,shippingMode,customerInfo,shippingAddress,payment}) {
    return (
        <React.Fragment>
            <div style={{display:"flex",alignItems:"center",margin:"1em"}}>
                <Box mr={1}>
                <CheckCircleIcon fontSize="large"/>
                </Box>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <span>Order INSERT_NUMBER</span>
    <Typography variant="h5">Thank you, {customerInfo.firstName}</Typography>
                </div>
            </div>
            <Divider/>
            <Box m={2}>
                <Typography variant="body1">
                    Your order is confirmed <br/>
                    We've accepted your order and we're getting it ready.
                </Typography>
            </Box>
            <Divider/>
            <Box m={2}>
                <Typography variant="h5">Customer Information</Typography>
                <Grid container spacing={2} >
                    <Grid item xs={6}  direction="column">
                        <Typography variant="h6">
                            Shipping Address
                        </Typography>
                        <Typography variant="body1">
                            {customerInfo.firstName} {customerInfo.lastName}
                        </Typography>
                        <Typography variant="body2">
                            {shippingAddress.address}
                        </Typography>
                    </Grid>

                    <Grid item xs={6}  direction="column">
                        <Typography variant="h6">
                            Billing Address
                        </Typography>
                        <Typography variant="body1">
                        {customerInfo.firstName} {customerInfo.lastName}
                        </Typography>
                        <Typography variant="body2">
                        {shippingAddress.address}
                        </Typography>
                    </Grid>

                    <Grid item xs={6}  direction="column">
                        <Typography variant="h6">
                            Shipping Method
                        </Typography>
                        <Typography variant="body1">
                            {shippingMode}
                        </Typography>
                    </Grid>

                    <Grid item xs={6} direction="column">
                        <Typography variant="h6">
                            Payment Method
                        </Typography>
                        <Typography variant="body1">
                            {payment.cvv} - {subTotal}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}
