import React, { useState, useEffect } from "react";
import NavigationSeparator from "./breadcrumb";
import { Grid } from "@material-ui/core";
import ProductCard from "./productcard";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const shitStyles = makeStyles({
  root: {
    flexGrow: "1",
  },
});

export default function SellOutPage({ match }) {
  const classes = shitStyles();
  const [apiResponse, setAPIRes] = useState([]);
  var site = match.params.subcategory;
  useEffect(() => {
    async function apiCall() {
      var res = await axios.get(`http://localhost:8000/api/${site}`);
      return await res;
    }
    apiCall().then(res=>setAPIRes(res.data)).catch(err=> console.log(err));
  }, [site]); 
  return (
    <React.Fragment>
      <NavigationSeparator urlparams={match.params} />
      <Grid container>
        <Grid item md={2} container>
          {/* make a component for FILTER */}
          <div style={{ width: "100%", height: "100%" }}></div>
        </Grid>

        <Grid
          item
          xs={12}
          md={10}
          container
          spacing={3}
          className={classes.root}
        >
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              {" "}
              <Typography variant="h5">{match.params.subcategory}</Typography>
            </div>{" "}
          </Grid>

          {apiResponse.map((item) => {
            return (
              <Grid item xs={4}>
                <ProductCard productDetails={item} urls={match.params} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
