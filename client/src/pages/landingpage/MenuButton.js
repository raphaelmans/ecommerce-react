import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    cursor: "pointer",
    color: "black",
  },
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#f0f0f0",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "black",
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (props.listitem.length > 1) {
      setAnchorEl(event.currentTarget);
    } else {
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const titleparams = props.title.replace(/\W/g, "").toLowerCase();
  return (
    <div>
      <Link
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        // component="button"
        underline="hover"
        color="initial"
        className={classes.root}
      >
        {props.title}
      </Link>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.listitem.length > 1
          ? props.listitem.map((item) => {
              const urlparams = item.replace(/\s+/g, "").toLowerCase();

              return (
                <Link
                  onClick={handleClose}
                  to={`/${titleparams}/${urlparams}`}
                  className={classes.root}
                  color="initial"
                  
                >
                  <StyledMenuItem>
                    <ListItemText primary={item} />
                  </StyledMenuItem>
                </Link>
              );
            })
          : null}
      </StyledMenu>
    </div>
  );
}
