import React from "react";
import { Box, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import { Font, Heading } from "../../../../../utils/theme/typo";
import DashboardCards from "../../components/DashboardCard";
import ServiceCards from "../../components/ServiceCards";
import ClientList from "../../components/ClientList";
import AppointmentScheduler from "../../components/AppointmentScheduler";
import { CardsData, CardsDataTwo } from "../../../../../utils/raw-data/data";
import DashboardCardsTwo from "../../components/DashboardCardsTwo";
import ClientListTable from "../../components/ClientListTable";

const Clients = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          p: {
            lg: 5,
            xs: 2,
          },
          display: {
            md: "flex",
            xs: "static",
          },
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "20px 20px 20px 20px",
          gap: 2,
        }}
      >
        <div>
          <Heading sx={{ font: 39, color: "green", lineHeight: 1.3 }}>
            Bonjour {"<compte>"}, bienvenue <br /> sur la liste des dossiers
            clients
          </Heading>
          <Box height={30} />
          <Font color={"green"}>
            Vous pouvez ici retrouver un tableau de bord listant les clients
            appartenant au centre sélectionné
          </Font>
        </div>
        <Box
          sx={{
            display: {
              md: "flex",
              xs: "block",
            },
            gap: {
              lg: 2,
              xs: 2,
            },
          }}
        >
          <Button
            sx={{ textTransform: "capitalize", background: "white" }}
            startIcon={<LocationOnIcon />}
            variant="outlined"
            color="success"
          >
            Select a center
          </Button>

          <Button
            variant="outlined"
            color="success"
            sx={{ textTransform: "capitalize", background: "white" }}
            startIcon={<CalendarMonthIcon />}
          >
            Daily{" "}
          </Button>
        </Box>
      </Box>
      <DashboardCards cards={CardsDataTwo} />
      <DashboardCardsTwo />
      <ClientListTable />
    </div>
  );
};

export default Clients;
