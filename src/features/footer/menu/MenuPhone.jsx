import { Box, Button, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";
import { Link } from "react-router-dom";

const MenuPhone = () => {
  return (
    <div className="flex flex-col gap-4">
      <Box>
        <Typography>Hotel App</Typography>
        <Typography sx={{ fontSize: "14px" }}>
          Stay, Dine, Shop Anytime Anywhere
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <img
            src="https://play-lh.googleusercontent.com/crLtf5MJo8ektlu-pBYWCMWaurUO7DipmOXqEHTjif9Flb3D_YuKnasPnoa4kWdukDgV"
            alt="barcode"
            loading="lazy"
            width={80}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            color="black"
            size="small"
            startIcon={<AppleIcon />}
          >
            Apple
          </Button>
          <Button
            variant="outlined"
            color="black"
            size="small"
            startIcon={<ShopIcon />}
          >
            Playstore
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Link>
            <InstagramIcon />
          </Link>
          <Link>
            <FacebookIcon />
          </Link>
          <Link>
            <WhatsAppIcon />
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default MenuPhone;
