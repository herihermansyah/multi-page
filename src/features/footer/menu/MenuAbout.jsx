import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MenuAbout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography>About Hotel</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>About Us</Typography>
        </Link>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Our Hotel Brands</Typography>
        </Link>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Residence</Typography>
        </Link>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Contact Us</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default MenuAbout;
