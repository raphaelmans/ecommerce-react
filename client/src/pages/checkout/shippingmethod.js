import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Box, Typography, FormControl,RadioGroup,FormControlLabel,Radio,Grid,Button } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';





export default function ShippingMethod({editForm,nextstep,prevstep,setShipMethod,shippingMode,shippingCompany,shippingAddress}) {
  
    const handleRadio = (e) =>{
        setShipMethod(e);
    }

  
    return (
        <React.Fragment>
            <div style={{display:"flex",justifyContent:"space-between",margin:"1em 0"}}>
                <span>Shipping Address <span><strong>{shippingAddress.address}</strong></span></span> <Link onClick={()=>{editForm(1)}}style={{textDecoration:"none"}}>Edit</Link>
            </div>
            <Divider/>
            <Box mt={2} mb={2}>
                <Typography variant="h5">Shipping Method</Typography>
                <FormControl fullWidth="true" component="fieldset">
                        <RadioGroup aria-label="shippingmethod" name="shippingmethod" value={shippingMode} onChange={handleRadio}>
                        <div style={{display:"flex",width:"100%",flexDirection:"column"}}>

                            {shippingCompany.map(elem=>(
                                    <div style={{display:"flex",justifyContent:"space-between",width:"100%",flexDirection:"row",alignItems:"center"}}>
                                        <FormControlLabel value={elem.companyName} control={<Radio color="primary" />} label={elem.companyName}/>
                                        <Typography variant="body1" >₱{elem.fee}</Typography>
                                    </div>
                            ))}
                            </div>
                        </RadioGroup>
                        </FormControl>
            </Box>
            <Divider/>
            <div style={{ display: "flex", justifyContent: "space-between",margin:"1em 0" }}>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={prevstep}
        >
          <div style={{display:"flex",alignItems:"center"}}>
          <ArrowBackIosIcon/>
          Return to Customer Information
          </div>
        </Link>
        <Button variant="outlined" color="primary" onClick={nextstep}>
          Continue to Payment Method
        </Button>
      </div>
        </React.Fragment>
    )
}
