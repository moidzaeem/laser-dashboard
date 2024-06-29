import { Box } from "@mui/material";
import { Caption, Font } from "../../../../utils/theme/typo";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const DashboardCards = () => {
  const cards = [
    {
      title: "Rendez-Vous du jour",
      mainValue: "8 / 10",
      subValue: "80% De la disponibilité occupée",
    },
    {
      title: "Praticiens Disponibles",
      mainValue: "1 / 2",
      subValue: "50% Des effectifs présents",
    },
    {
      title: "Praticiens Disponibles",
      mainValue: "1 / 2",
      subValue: "50% Des effectifs présents",
    },
    {
      title: "Praticiens Disponibles",
      mainValue: "1 / 2",
      subValue: "50% Des effectifs présents",
    },
  ];

  return (
    <Box display="flex" justifyContent="space-between" gap={3} mt={3}>
      {cards.map((card, index) => (
        <Box
          key={index}
          sx={{
            width: "30%",
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "start",
          }}
        >
          <CalendarMonthIcon style={{ fontSize: 40, color: "#1E7F6F" }} />
          <Font sx={{ mt: 2 }}>{card.title}</Font>
          <Font sx={{ mt: 1, fontSize: 20, fontWeight: 700, color: "#1E7F6F" }}>
            {card.mainValue}
          </Font>
          <Caption sx={{ mt: 1, color: "gray" }}>{card.subValue}</Caption>
        </Box>
      ))}
    </Box>
  );
};

export default DashboardCards;
