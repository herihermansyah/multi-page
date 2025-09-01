import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MenuFind = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography>Find & Book</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Our Destination</Typography>
        </Link>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Find a Reservation</Typography>
        </Link>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Meeting & Events</Typography>
        </Link>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Restaurants & Bars</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default MenuFind;
