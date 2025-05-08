"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BadgeIcon from "@mui/icons-material/Badge";

function MenuItems() {
  const pathname = usePathname();

  const [openSections, setOpenSections] = React.useState({
    category: false,
    orders: false,
  });

  const handleToggle = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const isActive = (path) =>
    pathname === path || pathname.startsWith(path);

  const activeStyles = {
    backgroundColor: "#FFEDE3",
    color: "#F26722",
    fontWeight: "bold",
    "& .MuiListItemIcon-root": {
      color: "#F26722",
    },
    "&:hover": {
      backgroundColor: "#FFEDE3",
      color: "#F26722",
    },
    fontFamily: "Poppins, sans-serif",
    borderRadius: "12px",
  };

  const activeColorOnly = {
    color: "#F26722",
    fontWeight: "bold",
    "& .MuiListItemIcon-root": {
      color: "#F26722",
    },
    "&:hover": {
      color: "#F26722",
    },
    fontFamily: "Poppins, sans-serif",
  };

  const listItemIconStyle = { minWidth: "30px" };
  const listItemTextStyle = { fontWeight: "600" };



  const renderCollapse = (section, items) => (
    <Collapse in={openSections[section]} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {items.map(({ path, label }) => (
          <Link key={path} href={path} passHref legacyBehavior>
            <ListItemButton
              component="a"
              sx={{
                pl: 4,
                ...(isActive(path) ? activeColorOnly : {}),
              }}
            >
              <ListItemIcon sx={listItemIconStyle}>
                <FiberManualRecordIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={label} sx={listItemTextStyle} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Collapse>
  );

  return (
    <>
     

      <Divider />

      <Typography sx={{ pl: 2, pt: 1, pb: 1 }} variant="subtitle2" color="textSecondary">
        Items
      </Typography>

      <List>
     
        <Link href="/items" >
          <ListItemButton sx={isActive("/items") ? activeStyles : {}}>
            <ListItemIcon sx={listItemIconStyle}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Products" sx={listItemTextStyle} />
          </ListItemButton>
     
        </Link>
        <Link href="/daily-account" >
    
          <ListItemButton sx={isActive("/daily-account") ? activeStyles : {}}>
            <ListItemIcon sx={listItemIconStyle}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Daily Account" sx={listItemTextStyle} />
          </ListItemButton>
        </Link>
      </List>

      <Divider />

      <Typography sx={{ pl: 2, pt: 1, pb: 1 }} variant="subtitle2" color="textSecondary">
        Manage Roles
      </Typography>

      <List>
        <Link href="/customers" >
          <ListItemButton  sx={isActive("/customers") ? activeStyles : {}}>
            <ListItemIcon sx={listItemIconStyle}>
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" sx={listItemTextStyle} />
          </ListItemButton>
        </Link>

        <Link href="/employees" >
          <ListItemButton  sx={isActive("/employees") ? activeStyles : {}}>
            <ListItemIcon sx={listItemIconStyle}>
              <BadgeIcon />
            </ListItemIcon>
            <ListItemText primary="Employees" sx={listItemTextStyle} />
          </ListItemButton>
        </Link>
      </List>
    </>
  );
}

export default MenuItems;
