import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./headersection"
import MainFeaturedPost from "./featuredpost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sepg from "../../components/selloutpage";
import ShowItem from "../product_details/showitem";
import CreateItem from "../postitem/createitem";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  // { title: "Home", sublinks: [""] },
  {
    title: "Electronics",
    sublinks: [
      "Cables & Adapters",
      "Batteries",
      "Chargers",
      "Cameras",
      "Bags & Cases",
    ],
  },
  {
    title: "Women's Clothing",
    sublinks: [
      "Hot Categories",
      "Outerwear & Jackets",
      "Weddings & Events",
      "Bottoms",
      "Tops & Sets",
      "Accessories",
    ],
  },
  { title: "Computer", sublinks: [""] },
  { title: "Jewelry & Watches", sublinks: [""] },
];

const mainFeaturedPost = {
  title: "DT 770 PRO",
  // description:
  //   "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image:
    "https://images.unsplash.com/photo-1478131433366-8bc6be66468c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  imgText: "main image description",
  // linkText: "Continue reading…"
};

export default function Blog() {
  const classes = useStyles();
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Ecommerce" sections={sections} />
          <main>
            <Switch>
              <Route path="/" exact>
                <MainFeaturedPost post={mainFeaturedPost} />
              </Route>
              <Route path="/:category/:subcategory" exact component={Sepg} />
              <Route path="/:category/:subcategory/:id" component={ShowItem} />
              <Route path="/newitem" exact component={CreateItem} />
            </Switch>
          </main>
        </Container>
        {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
      </React.Fragment>
    </Router>
  );
}
