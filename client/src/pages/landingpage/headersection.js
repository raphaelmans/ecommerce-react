import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import MenuButton from "./menubutton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import DrawerSection from "./drawersection";
import { Link } from "react-router-dom";
import ShoppingCart from '../../components/shoppingcart'
const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },

  siteTitle: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      border: "1px solid gray",
    },
  },
}));

function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link to="/" className={classes.siteTitle}>
            {title}
          </Link>
        </Typography>

        {matches ? (
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            size="small"
          />
        ) : null}
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>

      {matches ? (
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {sections.map((section) => (
            <MenuButton title={section.title} listitem={section.sublinks} />
          ))}
          {/* TODO: ADD CART COMPONENT WITH HOVER ITEMS */}
            <ShoppingCart/>
        </Toolbar>
      ) : (
        <DrawerSection />
      )}
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Header;
