import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { NavLink} from "react-router-dom";
import {Link} from "@material-ui/core"
import "../App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  breadCrumb: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(7),
    
  },
}));

const linkStyle = {textDecoration:"none",color:"gray"}

export default function CustomSeparator(props) {
  const classes = useStyles();

  return (
    <div className={classes.breadCrumb}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <NavLink to="/" activeStyle={linkStyle}>HOME</NavLink>
        <NavLink to="/" activeStyle={linkStyle}><span>{props.urlparams.category.toUpperCase()}</span></NavLink>
        <NavLink
        activeStyle={{textDecoration:"none"}}
          to={`/${props.urlparams.category}/${props.urlparams.subcategory}`}
        >
          <Typography color="textPrimary">
            <span>
            {props.urlparams.subcategory.toUpperCase()}
            </span>
          </Typography>
        </NavLink>
      </Breadcrumbs>
    </div>
  );
}
