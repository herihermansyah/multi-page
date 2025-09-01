import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { Box } from "@mui/material";

const MainNavigation = () => {
  return (
    <Box
      sx={{
        background: "yellow",
      }}
    >
      <Logo />
      <Menu />
    </Box>
  );
};

export default MainNavigation;
