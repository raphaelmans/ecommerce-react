import React from "react";
import NavigationSeparator from "./breadcrumb_navigation";
import { Grid } from "@material-ui/core";
import ProductCard from "./products";
import {Box} from "@material-ui/core"
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'


const shitStyles = makeStyles({
  root:{
   flexGrow:"1"
  }
});

export default function selloutpage({ match }) {
  const classes = shitStyles();
  return (
    <React.Fragment>
      <NavigationSeparator urlparams={match.params} />
     
      <Grid container >
        <Grid item md={2} container >

        {/* make a component for FILTER */}
        <div style={{width:"100%",height:"100%"}}>Filter</div>
        </Grid>
       
        <Grid item xs={12} md={10} container spacing={3} className={classes.root}>
          <Grid item xs={12}><div style={{display:"flex",justifyContent:"flex-start"}}> <Typography variant="h5">{match.params.subcategory}</Typography></div> </Grid>
          <Grid item xs={4}>
              <ProductCard/>
          </Grid>
          <Grid item xs={4}>
          <ProductCard/>
          </Grid>
          <Grid item xs={4}>
          <ProductCard/>
          </Grid>
         
        </Grid>
      </Grid>
      
    </React.Fragment>
  );
}
