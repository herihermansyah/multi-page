import React from "react";
import logo from "../../assets/logo.png";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box>
      <Container>
        <div className="flex  items-center justify-between py-4">
          <Link to="/">
            <img src={logo} alt="logo" loading="lazy" width={"150px"} />
          </Link>
          <div className="capitalize flex gap-4">
            <span>find reservastion</span>
            <a className="uppercase" href="wa.me">
              0898-xxx-xxx-xxx
            </a>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Logo;
