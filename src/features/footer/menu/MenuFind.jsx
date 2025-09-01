import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MenuFind = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography>Find & Book</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Link to="#">
          <Typography
            sx={{
              fontSize: "14px",
              ":hover": {
                color: "#E62727",
              },
            }}
          >
            Our Destination
          </Typography>
        </Link>
        <Link to="#">
          <Typography
            sx={{
              fontSize: "14px",
              ":hover": {
                color: "#E62727",
              },
            }}
          >
            Find a Reservation
          </Typography>
        </Link>
        <Link to="#">
          <Typography
            sx={{
              fontSize: "14px",
              ":hover": {
                color: "#E62727",
              },
            }}
          >
            Meeting & Events
          </Typography>
        </Link>
        <Link to="#">
          <Typography
            sx={{
              fontSize: "14px",
              ":hover": {
                color: "#E62727",
              },
            }}
          >
            Restaurants & Bars
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default MenuFind;
