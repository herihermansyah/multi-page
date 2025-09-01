import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Asia = () => {
  return (
    <Box>
      <Typography
        sx={{ marginBottom: 2, fontWeight: "bold", fontSize: "22px" }}
      >
        Asia
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
          <Link to="#">indonesia</Link>
          <Link to="#">malaysia</Link>
          <Link to="#">singapore</Link>
          <Link to="#">thailand</Link>
          <Link to="#">japan</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">indonesia</Link>
          <Link to="#">malaysia</Link>
          <Link to="#">singapore</Link>
          <Link to="#">thailand</Link>
          <Link to="#">japan</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">indonesia</Link>
          <Link to="#">malaysia</Link>
          <Link to="#">singapore</Link>
          <Link to="#">thailand</Link>
          <Link to="#">japan</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">indonesia</Link>
          <Link to="#">malaysia</Link>
          <Link to="#">singapore</Link>
          <Link to="#">thailand</Link>
          <Link to="#">japan</Link>
        </Box>
      </div>
    </Box>
  );
};

export default Asia;
