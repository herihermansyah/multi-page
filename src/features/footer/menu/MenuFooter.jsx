import React from "react";
import MenuFind from "./MenuFind";
import MenuAbout from "./MenuAbout";
import MenuSupport from "./MenuSupport";
import MenuPhone from "./MenuPhone";
import { Container } from "@mui/material";

const MenuFooter = () => {
  return (
    <div className=" bg-[#DCDCDC] ">
      <Container
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingY: 2,
        }}
      >
        <MenuFind />
        <MenuAbout />
        <MenuSupport />
        <MenuPhone />
      </Container>
    </div>
  );
};

export default MenuFooter;
