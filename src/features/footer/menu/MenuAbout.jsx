import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MenuAbout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography>About Hotel</Typography>
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
            About Us
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
            Our Hotel Brands
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
            Residence
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
            Contact Us
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default MenuAbout;
