import { Box, Container } from "@mui/material";
import React from "react";
import Asia from "./Asia";
import Hero from "./Hero";
import America from "./America";
import Africa from "./Africa";
import Euro from "./Euro";

const ResortPages = () => {
  return (
    <div className="mt-4 mb-4">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Hero />
        <Container>
          <div className="flex flex-col gap-20">
            <Asia />
            <America />
            <Africa />
            <Euro />
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default ResortPages;
