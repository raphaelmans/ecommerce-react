import React from "react";
import { Grid, Paper, Card, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import NavigationSeparator from "./breadcrumb_navigation"
const styles = makeStyles({
    root: {
      width:"100%",
      height:"70vh",
      background:""
    },
    media: {
      height: "100%",
    },
  
  });
export default function showItem({match}) {
    const classes = styles();
    return(
        <div>
              <NavigationSeparator urlparams={match.params}/>
  <Grid container>
      <Grid item xs={6} spacing={3}>
        
        <div style={{backgroundImage:'url("https://source.unsplash.com/random")', height:"70vh"}}>

        </div>

      </Grid>
        
       
    <Grid item xs={6}>
        <Paper elevation={0} variant="outlined" className={classes.root}>
          <Typography>
              Lorem ipsum
          </Typography>

        </Paper>
    </Grid>
    
  </Grid>
  </div>
  )
}
