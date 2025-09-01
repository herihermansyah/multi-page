import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const America = () => {
  return (
    <Box>
      <Typography
        sx={{ marginBottom: 2, fontWeight: "bold", fontSize: "22px" }}
      >
        America
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
          <Link to="#">canada</Link>
          <Link to="#">brazil</Link>
          <Link to="#">colombia</Link>
          <Link to="#">panama</Link>
          <Link to="#">america</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">canada</Link>
          <Link to="#">brazil</Link>
          <Link to="#">colombia</Link>
          <Link to="#">panama</Link>
          <Link to="#">america</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">canada</Link>
          <Link to="#">brazil</Link>
          <Link to="#">colombia</Link>
          <Link to="#">panama</Link>
          <Link to="#">america</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">canada</Link>
          <Link to="#">brazil</Link>
          <Link to="#">colombia</Link>
          <Link to="#">panama</Link>
          <Link to="#">america</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">canada</Link>
          <Link to="#">brazil</Link>
          <Link to="#">colombia</Link>
          <Link to="#">panama</Link>
          <Link to="#">america</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">canada</Link>
          <Link to="#">brazil</Link>
          <Link to="#">colombia</Link>
          <Link to="#">panama</Link>
          <Link to="#">america</Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textTransform: "capitalize",
          }}
        >
          <Link to="#">canada</Link>
          <Link to="#">brazil</Link>
          <Link to="#">colombia</Link>
          <Link to="#">panama</Link>
          <Link to="#">america</Link>
        </Box>
      </div>
    </Box>
  );
};

export default America;
