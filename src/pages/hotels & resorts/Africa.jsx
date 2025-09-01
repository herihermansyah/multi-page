import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Africa = () => {
  return (
    <Box>
      <Typography
        sx={{ marginBottom: 2, fontWeight: "bold", fontSize: "22px" }}
      >
        Africa
      </Typography>
      <div className="grid grid-cols-4 gap-20">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">al - jazair</Link>
          <Link to="#">egypt</Link>
          <Link to="#">marocco</Link>
          <Link to="#">djibouti</Link>
          <Link to="#">ethiopia</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">al - jazair</Link>
          <Link to="#">egypt</Link>
          <Link to="#">marocco</Link>
          <Link to="#">djibouti</Link>
          <Link to="#">ethiopia</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">al - jazair</Link>
          <Link to="#">egypt</Link>
          <Link to="#">marocco</Link>
          <Link to="#">djibouti</Link>
          <Link to="#">ethiopia</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">al - jazair</Link>
          <Link to="#">egypt</Link>
          <Link to="#">marocco</Link>
          <Link to="#">djibouti</Link>
          <Link to="#">ethiopia</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">al - jazair</Link>
          <Link to="#">egypt</Link>
          <Link to="#">marocco</Link>
          <Link to="#">djibouti</Link>
          <Link to="#">ethiopia</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">al - jazair</Link>
          <Link to="#">egypt</Link>
          <Link to="#">marocco</Link>
          <Link to="#">djibouti</Link>
          <Link to="#">ethiopia</Link>
        </Box>
      </div>
    </Box>
  );
};

export default Africa;
