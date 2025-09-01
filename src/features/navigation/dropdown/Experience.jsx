import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Typography } from "@mui/material";

export default function GroupedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="py-2">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link className="uppercase flex items-center" onClick={handleClick}>
          <Typography>Experience</Typography>
          <ArrowDropDownIcon />
        </Link>
      </Box>

      <Menu
        id="grouped-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/wedding" onClick={handleClose}>
          Weddings
        </MenuItem>
        <MenuItem component={Link} to="/meeting" onClick={handleClose}>
          Meetings
        </MenuItem>
      </Menu>
    </div>
  );
}
