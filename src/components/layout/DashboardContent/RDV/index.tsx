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
import { CardsData } from "../../../../../utils/raw-data/data";

const RDV = () => {
  return (
    <div>
      {" "}
      <Box
        sx={{
          backgroundImage: "url(/waves.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          p: {
            lg: 5,
            xs: 2,
          },
          backgroundColor: "#E5FFF9",
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
          <Heading sx={{ font: 39, color: "green" }}>
            Bonjour Sebastien <br /> <br /> bienvenue sur le CRM
          </Heading>
          <Box height={30} />
          <Font color={"green"}>
            Vous pouvez ici retrouver un tableau de bord résumant les <br />{" "}
            données importantes de votre centre
          </Font>
        </div>
        <Box
          sx={{
            display: {
              md: "flex",
              xs: "block",
            },
            gap: 2,
          }}
        >
          <Button
            sx={{ textTransform: "capitalize", background: "white" }}
            startIcon={<LocationOnIcon />}
            variant="outlined"
            color="success"
          >
            Porto Vecchio
          </Button>

          <Button
            variant="outlined"
            color="success"
            sx={{ textTransform: "capitalize", background: "white" }}
            startIcon={<CalendarMonthIcon />}
          >
            Aujourd’hui
          </Button>
        </Box>
      </Box>
      <DashboardCards cards={CardsData} />
      <Box
        sx={{
          display: {
            lg: "flex",
            xs: "block",
          },
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: {
              lg: "45%",
              xs: "100%",
            },
          }}
        >
          <ServiceCards />
          <ClientList />
        </Box>
        <Box
          sx={{
            width: {
              lg: "45%",
              xs: "100%",
            },
          }}
        >
          <AppointmentScheduler />
        </Box>
      </Box>
    </div>
  );
};

export default RDV;
