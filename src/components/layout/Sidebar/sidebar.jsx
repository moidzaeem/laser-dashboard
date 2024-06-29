import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  CalendarToday,
  Group,
  Event,
  Business,
  LocationCity,
  Dashboard,
  Folder,
  CenterFocusStrong,
  BarChart,
  AttachMoney,
  Person,
  Settings,
  ExitToApp,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import AppButton from "../../ui/Button";
import { secondary } from "../../../../utils/theme/colors";
import { Font } from "../../../../utils/theme/typo";

const SidebarContainer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 240,
    padding: theme.spacing(3),
    background: secondary,
    color: "white",
    borderRadius: "0px 30px 0px 0px",
  },
}));

const SidebarList = styled(List)({
  "& .MuiListItem-root": {
    paddingLeft: 20,
    "& .MuiTypography-root": {
      fontSize: 14,
    },
  },
});

const SubList = styled(List)({
  paddingLeft: 20,
});

const menuItems = [
  {
    text: "RDV",
    icon: <CalendarToday />,
    subItems: [{ text: "RDV Praticien" }, { text: "RDV du centre" }],
  },
  {
    text: "Clients",
    icon: <Group />,
    subItems: [{ text: "Mes Clients" }, { text: "Clients du centre" }],
  },
  {
    text: "Planning",
    icon: <Event />,
    subItems: [
      { text: "Mes Disponibilites" },
      { text: "Mes Vacances" },
      { text: "Mes Services" },
    ],
  },
  { text: "Centre", icon: <Business /> },
  { text: "Grenoble", icon: <LocationCity /> },
  { text: "Dashboard", icon: <Dashboard /> },
  { text: "Customer files", icon: <Folder /> },
  { text: "All Centers", icon: <CenterFocusStrong /> },
  { text: "Statistics", icon: <BarChart /> },
  { text: "Billing", icon: <AttachMoney /> },
  { text: "Practicioners", icon: <Person /> },
  { text: "Services", icon: <Settings /> },
  { text: "Settings", icon: <Settings /> },
  { text: "Log out", icon: <ExitToApp /> },
];

export function Sidebar() {
  const [open, setOpen] = React.useState({});

  const handleClick = (item) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [item]: !prevOpen[item],
    }));
  };

  return (
    <SidebarContainer variant="permanent">
      <img src="/logo.svg" alt="Logo" />

      <SidebarList sx={{ mt: 5 }}>
        <AppButton text="Menu Praticien" height={40} fullWidth />
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              sx={{ mt: 3 }}
              onClick={() => item.subItems && handleClick(item.text)}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <Font>{item.text}</Font>
              {/* <ListItemText primary={item.text} /> */}
              {item.subItems ? (
                open[item.text] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>
            {item.subItems && (
              <Collapse in={open[item.text]} timeout="auto" unmountOnExit>
                <SubList component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem button key={subIndex}>
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </SubList>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </SidebarList>
    </SidebarContainer>
  );
}
