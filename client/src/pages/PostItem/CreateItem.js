import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";

const categories = ["electronics", "cables&adapters", "chargers", "bags&cases"];

export default function CreateItem() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [formData, setFormData] = useState({
    category: "",

    itemDetails: {
      itemName: "",
      itemDescription: "",
      itemPrice: 0,
      itemRating: 0,
      itemImage: "",
    },
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category) => {
    setFormData({
      category: category,
      itemDetails: { ...formData.itemDetails },
    });
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      itemDetails: {
        ...formData.itemDetails,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, itemRating: value });
    console.log(formData);
    axios
      .post("http://localhost:8000/api/newitem", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Typography variant="h4">New Item</Typography>
      <form onSubmit={handleSubmit}>
        {/* <TextField
          id="outlined-basic"
          label="Category"
          name="category"
          variant="outlined"
          style={{ margin: "8px 0" }}
          onChange={(e)=>{setFormData({category:e.target.value, ...formData.itemDetails})}}
        >
          {" "}
        </TextField> */}

        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="secondary"
          variant="outlined"
        >
          {formData.category.length > 0 ? formData.category : "Choose Category"}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {categories.map((item) => (
            <MenuItem
              value={item}
              onClick={() => {
                handleClose(item);
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
        <br />
        <TextField
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          name="itemName"
          style={{ margin: "8px 0" }}
          onChange={handleChange}
        >
          {" "}
        </TextField>
        <br />
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={10}
          placeholder="Product description"
          variant="outlined"
          fullWidth
          name="itemDescription"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          name="itemPrice"
          label="Product Price"
          variant="outlined"
          style={{ margin: "8px 0" }}
          onChange={handleChange}
        >
          {" "}
        </TextField>
        <br />
        <TextField
          id="outlined-basic"
          name="itemImage"
          label="Product Image Link"
          variant="outlined"
          style={{ margin: "8px 0" }}
          onChange={handleChange}
        >
          {" "}
        </TextField>
        <br />
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            setFormData({
              ...formData,
              itemDetails: { ...formData.itemDetails, itemRating: newValue },
            });
          }}
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
}
