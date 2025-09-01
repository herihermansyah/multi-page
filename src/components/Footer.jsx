import React from "react";
import MenuFooter from "../features/footer/menu/MenuFooter";
import FooterCopyRight from "../features/footer/copyright/FooterCopyRight";
import Support from "../features/footer/support/Support";

const Footer = () => {
  return (
    <div className="mt-20">
      <MenuFooter />
      <Support />
      <FooterCopyRight />
    </div>
  );
};

export default Footer;
