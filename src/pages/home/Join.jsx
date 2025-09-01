import { Box, Button, Typography } from "@mui/material";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import React from "react";

const Join = () => {
  return (
    <div className="flex justify-between items-center ">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography sx={{ fontSize: "32px" }}>Join Hotel Today</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          impedit?
        </p>
        <Button variant="contained">join now</Button>
      </Box>
      <div className="grid grid-cols-2 gap-10">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMembershipIcon sx={{ fontSize: "100px" }} />
          <Typography>Member Exclusive Offers</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PhoneAndroidIcon sx={{ fontSize: "100px" }} />
          <Typography>Mobile Check-In & Out</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ChildFriendlyIcon sx={{ fontSize: "100px" }} />
          <Typography>Children Eat Free</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ShieldMoonIcon sx={{ fontSize: "100px" }} />
          <Typography>Earn Free Nights</Typography>
        </Box>
      </div>
    </div>
  );
};

export default Join;
