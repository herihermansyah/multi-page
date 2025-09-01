import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MenuCopyRight = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent:"center", gap: 1 }}>
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Privacy Policy</Typography>
        </Link>
        |
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Terms & Conditions</Typography>
        </Link>
        |
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Safety & Secutity</Typography>
        </Link>
        |
        <Link to="#">
          <Typography sx={{ fontSize: "14px" }}>Ciber Security</Typography>
        </Link>
      </Box>
    </div>
  );
};

export default MenuCopyRight;
