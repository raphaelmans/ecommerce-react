import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const buttonStyle = makeStyles({
    root: {
      padding: 0,
    },
  
  });
export default function ButtonQty({increaseQty,decreaseQty}) {
    const classes = buttonStyle();
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical primary button group"
      className={classes.root}
    >
      <Button
        size="small"
        className={classes.root}
        onClick={increaseQty}
      >
        <ExpandLessIcon />
      </Button>
      <Button
        size="small"
        className={classes.root}
        onClick={decreaseQty}
      >
        <ExpandMoreIcon />
      </Button>
    </ButtonGroup>
  );
}
