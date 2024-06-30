import { Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BusinessIcon from "@mui/icons-material/Business";
import { Caption, Font } from "../../../../utils/theme/typo";

const data = [
  {
    title: "Rendez Vous",
    subtitle: "Suivi des rendez-vous",
    icon: <GroupIcon style={{ fontSize: 40, color: "#007b87" }} />,
    percentage:
      "16% par rapport au <mois précédent>16% par rapport au <mois précédent>16% par rapport au <mois précédent>16%",
  },
  {
    title: "Mon Planning",
    subtitle: "Suivi des rendez-vous",
    icon: <CalendarTodayIcon style={{ fontSize: 40, color: "#db4c3f" }} />,
    percentage:
      "16% par rapport au <mois précédent>16% par rapport au <mois précédent>16% par rapport au <mois précédent>16%",
  },
  {
    title: "Mon Centre",
    subtitle: "Mon centre et ses services",
    icon: <BusinessIcon style={{ fontSize: 40, color: "#f0c330" }} />,
    percentage:
      "16% par rapport au <mois précédent>16% par rapport au <mois précédent>16% par rapport au <mois précédent>16%",
  },
];

const DashboardCardsTwo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: {
          lg: 4,
          xs: 2,
        },
        borderRadius: 2,
        backgroundColor: "#fff",
        mt: 8,
        mb: 4,
        flexWrap: "wrap",
      }}
      className="shadow"
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            flex: 1,
            textAlign: "left",
            padding: 2,
            borderRight:
              index !== data.length - 1 ? "1px solid #e0e0e0" : "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              marginBottom: 3,
              gap: 1,
              alignItems: "center",
            }}
          >
            <span>{item.icon}</span>
            <div>
              <Font sx={{ fontSize: 18 }} color="#007b87" gutterBottom>
                <b> {item.title}</b>
              </Font>
              <Font color="#6c757d">{item.subtitle}</Font>
            </div>
          </Box>

          <Caption variant="body2" color="#6c757d">
            {item.percentage} par rapport au <br /> mois précédent
          </Caption>
        </Box>
      ))}
    </Box>
  );
};

export default DashboardCardsTwo;
