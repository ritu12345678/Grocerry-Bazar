"use client";

import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";

const AddItemForm = ({ onAddItem }) => {
  const [itemData, setItemData] = useState({
    date: "",
    item: "",
    quantity: "",
    purchaseRate: "",
    sellRate: "",
    isSell: "",
    isPurchase: "",
    isAmountPending: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (onAddItem) {
      onAddItem(itemData);
    }

    setItemData({
      date: "",
      item: "",
      quantity: "",
      purchaseRate: "",
      sellRate: "",
      isSell: "",
      isPurchase: "",
      isAmountPending: "",
    });
  };

  return (
    <Box component={Paper} p={3} mt={3}>
      <Typography variant="h6" mb={2}>
        Add Item
      </Typography>

      <div className="row">
        <div className="col-md-6 mb-3">
          <TextField
            label="Date"
            name="date"
            type="date"
            value={itemData.date}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </div>

        <div className="col-md-6 mb-3">
          <TextField
            label="Item"
            name="item"
            value={itemData.item}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div className="col-md-6 mb-3">
          <TextField
            label="Quantity"
            name="quantity"
            type="number"
            value={itemData.quantity}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div className="col-md-6 mb-3">
          <TextField
            label="Purchase Rate"
            name="purchaseRate"
            type="number"
            value={itemData.purchaseRate}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div className="col-md-6 mb-3">
          <TextField
            label="Sell Rate"
            name="sellRate"
            type="number"
            value={itemData.sellRate}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div className="col-md-6 mb-3">
          <FormControl fullWidth>
            <InputLabel>Is Sell</InputLabel>
            <Select
              name="isSell"
              value={itemData.isSell}
              label="Is Sell"
              onChange={handleChange}
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="col-md-6 mb-3">
          <FormControl fullWidth>
            <InputLabel>Is Purchase</InputLabel>
            <Select
              name="isPurchase"
              value={itemData.isPurchase}
              label="Is Purchase"
              onChange={handleChange}
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="col-md-6 mb-3">
          <FormControl fullWidth>
            <InputLabel>Is Amount Pending</InputLabel>
            <Select
              name="isAmountPending"
              value={itemData.isAmountPending}
              label="Is Amount Pending"
              onChange={handleChange}
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add Item
        </Button>
      </Box>
    </Box>
  );
};

export default AddItemForm;
