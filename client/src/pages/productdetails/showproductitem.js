import React, {useEffect,useState}  from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavigationSeparator from "../../components/breadcrumb";
import ProductDetails from "./itemdetails";
import axios from 'axios'
const styles = makeStyles({
  root: {
    width: "100%",
    height: "70vh",
    background: "",
    padding: "2em",
  },
  media: {
    height: "100%",
  },
});


//deployment request
// .get(`http://ecommerce-mansueto.herokuapp.com/api/${match.params.category}/${match.params.id}`)

//development request
// .get(`http://localhost:8000/api/${match.params.category}/${match.params.id}`)

export default function ShowItem({ match }) {
  //TODO API CALL FOR DYNAMIC DATA
  const [apiData, setApiData] = useState("");
  useEffect(() => {
    axios
      .get(`http://ecommerce-mansueto.herokuapp.com/api/${match.params.category}/${match.params.id}`)
      .then((res) => {
        console.log(res.data)
        setApiData(res.data);
      });
  }, []);

  const classes = styles();
  return (
    <div>
      <NavigationSeparator urlparams={match.params} />
      <Grid container>
        <Grid item md={6} spacing={3}>
          <div
            style={{
              backgroundImage:
                `url("${apiData.itemImage}")`,
                backgroundRepeat:"no-repeat",
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat:"no-repeat",
                backgroundSize: "cover",
            }}
          ></div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} variant="outlined" className={classes.root}>
            <ProductDetails id={match.params.id} productDetails={apiData}></ProductDetails>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
