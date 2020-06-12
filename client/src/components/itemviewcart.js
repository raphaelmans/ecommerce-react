import React,{useState,useContext} from "react";
import {Grid,Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import ButtonQty from "./buttonqty"
import {GlobalContext} from "../context/globalstates"
const useStyles = makeStyles({

    itemStyles:{
        display:"flex",
        alignItems:"center",
        margin:"10px 0 10px 0"
    }
})
export default function ItemViewCart({item}) {
    const classes = useStyles();
      
    const {updateItem} = useContext(GlobalContext);
    console.log(item);
    const [count, setCount] = useState(item.itemQty);



    const increaseQty = () =>{
        setCount(count+1);
        updateItem(item.id,1)
    }
    const decreaseQty = () =>{
        if(count > 1){
        setCount(count-1);
        updateItem(item.id,-1)
      }
    }
  return (
    <Grid container className={classes.itemStyles}>
      <Grid item xs="8">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://source.unsplash.com/random"
            style={{ height: 100 }}
          />
          <Box ml={2}>{item.itemName}</Box>
        </div>
      </Grid>
      <Grid item xs="2">
        ${item.itemPrice.toFixed(2)}
      </Grid>
      <Grid item xs="2">
        <div style={{ display: "flex" }}>
          <input
            type="text"
            style={{ width: 50, padding: "0" }}
            value={count}
          />
          <ButtonQty increaseQty={increaseQty} decreaseQty={decreaseQty}  />
        </div>
      </Grid>
    </Grid>
  );
}
