import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Euro = () => {
  return (
    <Box>
      <Typography
        sx={{ marginBottom: 2, fontWeight: "bold", fontSize: "22px" }}
      >
        Euro
      </Typography>
      <div className="grid grid-cols-4 gap-20 ">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">france</Link>
          <Link to="#">spain</Link>
          <Link to="#">germany</Link>
          <Link to="#">poland</Link>
          <Link to="#">czeh republic</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">france</Link>
          <Link to="#">spain</Link>
          <Link to="#">germany</Link>
          <Link to="#">poland</Link>
          <Link to="#">czeh republic</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">france</Link>
          <Link to="#">spain</Link>
          <Link to="#">germany</Link>
          <Link to="#">poland</Link>
          <Link to="#">czeh republic</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">france</Link>
          <Link to="#">spain</Link>
          <Link to="#">germany</Link>
          <Link to="#">poland</Link>
          <Link to="#">czeh republic</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">france</Link>
          <Link to="#">spain</Link>
          <Link to="#">germany</Link>
          <Link to="#">poland</Link>
          <Link to="#">czeh republic</Link>
        </Box>
      </div>
    </Box>
  );
};

export default Euro;
