/* eslint-disable react/prop-types */
import { Box, Typography, Avatar, IconButton, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { primary } from "../../../../utils/theme/colors";
import { Font } from "../../../../utils/theme/typo";

// Practitioner data
const practitioners = [
  {
    name: "Norah Jones",
    role: "Manager",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg", // Replace with the actual image path
    contacts: [PhoneIcon, MailOutlineIcon, LinkedInIcon, PersonIcon],
  },
  {
    name: "Sarah Cook",
    role: "Practitioner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ69gUrJgJ3LEmMZmWUprFxulVmT5OohLoA&s", // Replace with the actual image path
    contacts: [PhoneIcon, MailOutlineIcon, LinkedInIcon, PersonIcon],
  },
  {
    name: "Jenny Lorenz",
    role: "Practitioner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZX52N3Yx3rEzNwTCRy9fqG3-pAIFWSPVnA5lwN4xJiH5X-MMzhPDKuo6buPPgwfPl9ig&usqp=CAU", // Replace with the actual image path
    contacts: [
      CalendarTodayIcon,
      PhoneIcon,
      MailOutlineIcon,
      LinkedInIcon,
      PersonIcon,
    ],
  },
];

const PractitionerCard = ({ practitioner }) => (
  <Box sx={{ textAlign: "center" }}>
    <Avatar
      alt={practitioner.name}
      src={practitioner.image}
      sx={{
        width: 100,
        height: 100,
        border: "2px solid green",
        margin: "0 auto",
      }}
    />
    <Font>{practitioner.name}</Font>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
        margin: "8px 0",
      }}
    >
      {practitioner.contacts.map((ContactIcon, index) => (
        <ContactIcon
          key={index}
          sx={{
            color: "white",
            border: "1px solid green",
            borderRadius: 2,
            backgroundColor: primary,
            p: 0.32,
          }}
        />
      ))}
    </Box>
    <Font>{practitioner.role}</Font>
  </Box>
);

const Practitioners = () => {
  return (
    <Box className="shadow" sx={{ p: 4, borderRadius: "20px" }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>
        Practitioners in this center
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
        <Grid
          container
          spacing={2}
          sx={{ flexGrow: 1, justifyContent: "space-between" }}
        >
          {practitioners.map((practitioner, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <PractitionerCard practitioner={practitioner} />
            </Grid>
          ))}
        </Grid>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Practitioners;
