import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Experience from "./dropdown/Experience";

const MainNavigation = () => {
  const menu = [
    { id: 1, path: "/resorts", name: "hotels & resorts" },
    { id: 2, path: "/offers", name: "offers" },
    { id: 3, path: "/resto", name: "restaurants & bars" },
  ];
  return (
    <nav className=" bg-[#DCDCDC]">
      <Container sx={{ display: "flex", gap: 6, alignItems: "center" }}>
        {menu.map((item) => (
          <React.Fragment key={item.id}>
            <Link
              className="uppercase"
              to={item.path}
              variant="innerhit"
              disableRipple
            >
              {" "}
              <Typography
                sx={{
                  ":hover": {
                    color: "#E62727",
                  },
                }}
              >
                {item.name}
              </Typography>
            </Link>
            {item.name === "hotels & resorts" && <Experience />}
          </React.Fragment>
        ))}
      </Container>
    </nav>
  );
};

export default MainNavigation;
