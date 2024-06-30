/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Caption, Font } from "../../../../utils/theme/typo";

// eslint-disable-next-line react/prop-types
const DashboardCards = ({ cards }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
      justifyContent="space-between"
      mt={3}
    >
      {cards?.map((card, index) => (
        <Box
          key={index}
          sx={{
            width: {
              lg: "250px",
              xs: "100%",
            },
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
            textAlign: "start",
          }}
          className="shadow"
        >
          <span style={{ color: "#1E7F6F" }}> {card.icon}</span>
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
