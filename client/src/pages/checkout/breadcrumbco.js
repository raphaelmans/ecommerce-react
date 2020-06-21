import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { NavLink} from "react-router-dom";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(0),
    },
  },
  breadCrumb: { 
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
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
      
                      <Link color="inherit" component="button" onClick={()=> props.editForm(1)}>
                                        Customer Information
                                </Link>
                                {props.steps >= 2  ? 
                                <Link  color="inherit"  component="button" onClick={()=> props.editForm(2)}>
                                        Shipping Method
                                </Link>
                                : null}
                                {props.steps >= 3 ? 
                               <Link color="inherit" component="button" onClick={()=> props.editForm(3)}>
                                  Payment Method
                                </Link> 
                                : null}
      </Breadcrumbs>
    </div>
  );
}
