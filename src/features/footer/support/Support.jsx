import { Container } from "@mui/material";
import React from "react";

const Support = () => {
  return (
    <div className=" bg-[#F3F2EC] ">
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 15,
          paddingY: 2,
        }}
      >
        <img
          src="https://img.freepik.com/premium-vector/hotel-icon-logo-vector-design-template_827767-3569.jpg"
          alt="support"
          loading="lazy"
          width={60}
          className="rounded-full"
        />
        <img
          src="https://www.designmantic.com/logo-images/727.png?company=Company%20Name&keyword=hotel&slogan=&verify=1"
          alt="support"
          loading="lazy"
          width={60}
          className="rounded-full"
        />
        <img
          src="https://dcassetcdn.com/design_img/1141086/51618/51618_6053295_1141086_image.jpg"
          alt="support"
          loading="lazy"
          width={60}
          className="rounded-full"
        />
      </Container>
    </div>
  );
};

export default Support;
