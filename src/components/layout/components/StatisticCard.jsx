/* eslint-disable react/prop-types */
import { Box, Card, IconButton } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { primary } from "../../../../utils/theme/colors";
import { Font } from "../../../../utils/theme/typo";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
const StatisticCard = ({ title, value, icon, backgroundColor, textColor }) => (
  <Card
    className="shadow"
    sx={{
      display: "flex",
      alignItems: "center",
      p: 2,
      borderRadius: 2,
      backgroundColor: backgroundColor || "white",
      color: textColor || "black",
      width: {
        lg: "auto",
        xs: "100%",
      },
    }}
  >
    <Box>
      <Font>{title}</Font>
      <Font sx={{ fontSize: 20 }}>{value}</Font>
    </Box>
    <IconButton
      sx={{
        background: "white",
        height: 40,
        width: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ml: 2,
      }}
    >
      <Box mt={1}>{icon}</Box>
    </IconButton>
  </Card>
);

const StatisticsCardMap = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <StatisticCard
          title="Month selected"
          value="April 1st, 2024"
          icon={<CalendarMonthIcon />}
          backgroundColor={primary}
          textColor="white"
        />
        <StatisticCard
          icon={<CalendarMonthIcon sx={{ color: primary }} />}
          title="Monthly sales"
          value="58 764 €"
        />
        <StatisticCard
          icon={<SignalCellularAltIcon sx={{ color: primary }} />}
          title="Number of appointments"
          value="200"
        />
        <StatisticCard
          icon={<CalendarMonthIcon sx={{ color: primary }} />}
          title="Number of customers"
          value="120"
        />
        <StatisticCard
          icon={<SignalCellularAltIcon sx={{ color: primary }} />}
          title="Worked hours"
          value="220h"
        />
      </Box>
    </Box>
  );
};

export default StatisticsCardMap;
