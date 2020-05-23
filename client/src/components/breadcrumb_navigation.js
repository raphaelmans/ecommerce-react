import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  },
  breadCrumb: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(7)
  }
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}



export default function CustomSeparator(props) {
  const classes = useStyles();

  return (
    <div className={classes.breadCrumb}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link color="inherit" href="/" onClick={handleClick}>
          HOME
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          {props.urlparams.category.toUpperCase()}
        </Link>
        <Typography color="textPrimary">{props.urlparams.subcategory.toUpperCase()}</Typography>
      </Breadcrumbs>
    </div>
  );
}
