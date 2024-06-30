import { Box } from "@mui/material";
import { Font, Heading } from "../../../../../utils/theme/typo";
import DashboardCards from "../../components/DashboardCard";
import ServiceCards from "../../components/ServiceCards";
import AppointmentScheduler from "../../components/AppointmentScheduler";
import { CardsData } from "../../../../../utils/raw-data/data";
import ProfileCard from "../../components/ProfileCard ";

const Planning = () => {
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
          <Heading sx={{ font: 39, color: "green", lineHeight: 1.4 }}>
            {"Bonjour <compte>, "} <br />
            bienvenue sur le CRM
          </Heading>
          <Box height={30} />
          <Font color={"green"}>
            Vous pouvez ici retrouver un tableau de bord résumant les <br />{" "}
            données importantes de votre centre
          </Font>
        </div>
      </Box>
      <ProfileCard />
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
          <AppointmentScheduler />
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
      <DashboardCards cards={CardsData} />
    </div>
  );
};

export default Planning;
