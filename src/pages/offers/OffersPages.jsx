import React from "react";
import { Container } from "@mui/material";
import OfferMenu from "./OfferMenu";
import { Outlet } from "react-router-dom";

const OffersPages = () => {
  return (
    <div className="m-4">
      <Container>
        <header className="sticky top-[98px] z-50 bg-white py-4">
          <OfferMenu />
        </header>
        <main className="mt-10">
          <Outlet />
        </main>
      </Container>
    </div>
  );
};

export default OffersPages;
