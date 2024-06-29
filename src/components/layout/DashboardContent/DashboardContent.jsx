import { Box, Button } from "@mui/material";
import Wrapper from "./Wrapper";
import { Font, Heading } from "../../../../utils/theme/typo";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DashboardCards from "../components/DashboardCard";
import ServiceCards from "../components/ServiceCards";
import AppointmentScheduler from "../components/AppointmentScheduler";
import ClientList from "../components/ClientList";

const DashboardContent = () => {
  return (
    <Wrapper>
      <Box
        sx={{
          backgroundImage: "url(/waves.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          p: 5,
          backgroundColor: "#E5FFF9",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "20px 20px 20px 20px",
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
        <div style={{ display: "flex", gap: 10 }}>
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
        </div>
      </Box>
      <DashboardCards />
      <Box sx={{ display: "flex", gap: 4 }}>
        <div style={{ width: "45%" }}>
          <ServiceCards />
          <ClientList />
        </div>
        <div style={{ width: "55%" }}>
          <AppointmentScheduler />
        </div>
      </Box>
    </Wrapper>
  );
};

export default DashboardContent;
