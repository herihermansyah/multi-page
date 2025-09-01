import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MenuSupport = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography>Support</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Investors</Typography>
        </Link>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Global Citizenship</Typography>
        </Link>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>News</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default MenuSupport;
