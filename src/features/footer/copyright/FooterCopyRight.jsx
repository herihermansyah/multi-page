import React from "react";
import MenuCopyRight from "./MenuCopyRight";
import CopyRight from "./CopyRight";
import { Container } from "@mui/material";

const FooterCopyRight = () => {
  return (
    <div className="bg-blue-600 ">
      <Container sx={{ paddingY: 2 }}>
        <MenuCopyRight />
        <CopyRight />
      </Container>
    </div>
  );
};

export default FooterCopyRight;
