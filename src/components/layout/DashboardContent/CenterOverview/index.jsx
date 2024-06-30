import {
  Box,
  Avatar,
  Checkbox,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Font } from "../../../../../utils/theme/typo";
import AppButton from "../../../ui/Button";
import { primary } from "../../../../../utils/theme/colors";
import Practitioners from "../../components/PractitionerCard";
import AppointmentTable from "../../components/AppointmentTable";
import Calendar from "../../components/Calendar";

// Styled components
// eslint-disable-next-line react/prop-types
const IconWrapper = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      marginBottom: "8px",
      flexDirection: "column",
      p: 2,
      boxShadow: "0px 6.71px 18.31px 12.21px rgba(0, 0, 0, 0.04)",
      gap: 2,
      flexWrap: "wrap",
      width: {
        lg: "130px",
        xs: "100%",
      },
    }}
  >
    {children}
  </Box>
);

const CenterOverview = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const details = [
    {
      icon: <AssignmentIndIcon sx={{ color: "white" }} />,
      label: "Center ID",
      value: "LA-FR-001",
    },
    {
      icon: <PhoneIcon sx={{ color: "white" }} />,
      label: "Phone ID",
      value: "+33 6 34 ",
    },
    {
      icon: <MailOutlineIcon sx={{ color: "white" }} />,
      label: "Mail address",
      value: "@laser",
    },
  ];

  const openingHours = [
    { day: "MON", hours: "08am - 07pm" },
    { day: "TUE", hours: "09am - 07pm" },
    { day: "WED", hours: "08am - 07pm" },
    { day: "THU", hours: "08am - 07pm" },
    { day: "SUN", hours: "Closed" },
  ];

  return (
    <>
      <Box className="shadow" sx={{ p: 4, borderRadius: "20px" }}>
        <Font sx={{ fontSize: 18, fontWeight: "bold" }}>
          Center overview : LaserAddict - Grenoble
        </Font>
        <Font sx={{ mb: 4 }}>Dashboard summarizing data from this center.</Font>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
            alignItems: {
              lg: "center",
              xs: "start",
            },
            flexDirection: isLgUp ? "row" : "column",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Font sx={{ fontSize: 18, fontWeight: "bold" }}>
            LaserAddict - Grenoble
          </Font>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: isLgUp ? "row" : "column",
              flexWrap: "wrap",
            }}
          >
            <AppButton text="Statistics" />
            <AppButton text="Configuration" />
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={9}>
            <Box
              className="shadow"
              sx={{
                display: {
                  lg: "flex",
                  xs: "block",
                },
                p: 4,
                gap: {
                  lg: 6,
                },
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="LaserAddict - Grenoble"
                  src="https://assets-news.housing.com/news/wp-content/uploads/2022/04/07013406/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg"
                  sx={{
                    width: 100,
                    height: 100,
                    border: "2px solid green",
                    mb: 2,
                  }}
                />
                <Font>Lorem ipsum</Font>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  mt: 2,
                  display: "flex",
                  gap: 3,
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                {details.map((detail) => (
                  <IconWrapper key={detail.label}>
                    <IconButton sx={{ background: primary }}>
                      {detail.icon}
                    </IconButton>
                    <Box>
                      <Font>
                        <b>{detail.label}</b>
                      </Font>
                      <Font fontWeight="bold">{detail.value}</Font>
                    </Box>
                  </IconWrapper>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box className="shadow" sx={{ p: 3 }}>
              <Font>Opening hours</Font>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {openingHours.map(({ day, hours }) => (
                  <Box key={day} sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox />
                    <Font sx={{ fontSize: 12 }}>{`${day} : ${hours}`}</Font>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} lg={6}>
          <Practitioners />
          <div style={{ height: 30 }} />
          <AppointmentTable />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Calendar />
        </Grid>
      </Grid>
    </>
  );
};

export default CenterOverview;
