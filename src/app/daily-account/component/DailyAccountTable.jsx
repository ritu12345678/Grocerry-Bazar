import React from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  IconButton, Collapse, Typography, Box, Paper
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

function createData(date, totalSell, totalProfit, pendingAmount, items) {
  return { date, totalSell, totalProfit, pendingAmount, items };
}

const rows = [
  createData("2025-05-04", 200000, 5000, 15000, [
    { item: "Millet Rice", quantity: 10, purchaseRate: 80, sellRate: 100, isSell: "Yes", isPurchase: "Yes", isAmountPending: "No" },
    { item: "Flour", quantity: 5, purchaseRate: 40, sellRate: 60, isSell: "Yes", isPurchase: "Yes", isAmountPending: "Yes" }
  ]),
  createData("2025-05-05", 100000, 3000, 20000, [
    { item: "Bakery", quantity: 8, purchaseRate: 90, sellRate: 120, isSell: "Yes", isPurchase: "Yes", isAmountPending: "No" }
  ])
];

function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.totalSell}</TableCell>
        <TableCell>{row.totalProfit}</TableCell>
        <TableCell>{row.pendingAmount}</TableCell>
        <TableCell>
          <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
            Edit
          </Typography>{" "}
          |{" "}
          <Typography variant="body2" color="error" sx={{ cursor: "pointer" }}>
            Delete
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <Typography variant="subtitle1" gutterBottom component="div">
                Item Details
              </Typography>
              <Table size="small" aria-label="item-details">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Purchase Rate</TableCell>
                    <TableCell>Sell Rate</TableCell>
                    <TableCell>Is Sell</TableCell>
                    <TableCell>Is Purchase</TableCell>
                    <TableCell>Is Amount Pending</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.item}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.purchaseRate}</TableCell>
                      <TableCell>{item.sellRate}</TableCell>
                      <TableCell>{item.isSell}</TableCell>
                      <TableCell>{item.isPurchase}</TableCell>
                      <TableCell>{item.isAmountPending}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleSalesTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell>Total Sell</TableCell>
            <TableCell>Total Profit</TableCell>
            <TableCell>Pending Amount</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <Row key={idx} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
