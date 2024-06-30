import {
  Box,
  Avatar,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WcIcon from "@mui/icons-material/Wc";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Font } from "../../../../utils/theme/typo";
import { primary } from "../../../../utils/theme/colors";

// Styled components
const IconWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "8px",
});

const ProfileCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 7,
        borderRadius: "20px",
      }}
      className="shadow"
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Avatar
          alt="Sarah Cook"
          src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" // Replace with the actual image path
          sx={{ width: 180, height: 180, border: "3px solid #21A282" }}
        />
        <Box>
          <Font sx={{ fontSize: 22, color: primary }}>
            <b>Sarah Cook</b>
          </Font>
          <IconWrapper>
            <IconButton sx={{ background: primary, color: "white", mt: 1 }}>
              <AssignmentIndIcon />
            </IconButton>
            <Font>ID Client: LA-FR-12</Font>
          </IconWrapper>
          <IconWrapper>
            <IconButton sx={{ background: primary, color: "white", mt: 1 }}>
              <PhoneIcon />
            </IconButton>
            <Font>Téléphone: +33 6 34 24 96 67</Font>
          </IconWrapper>
          <IconWrapper>
            <IconButton sx={{ background: primary, color: "white", mt: 1 }}>
              <MailOutlineIcon />
            </IconButton>
            <Font>Adresse Mail: sarah98@gmail.com</Font>
          </IconWrapper>
        </Box>
      </Box>
      <Box>
        <IconWrapper>
          <IconButton sx={{ background: primary, color: "white", mt: 1 }}>
            <CalendarTodayIcon />
          </IconButton>
          <Font>Date Naissance: 23/04/2001</Font>
        </IconWrapper>
        <IconWrapper>
          <IconButton sx={{ background: primary, color: "white", mt: 1 }}>
            <LocationOnIcon />
          </IconButton>
          <Font>Centre: 1. Porto Vecchio</Font>
        </IconWrapper>
        <IconWrapper>
          <IconButton sx={{ background: primary, color: "white", mt: 1 }}>
            <WcIcon />
          </IconButton>
          <Font>Genre: Femme</Font>
        </IconWrapper>
      </Box>
      <Box>
        <IconWrapper>
          <IconButton sx={{ background: primary, color: "white", mt: 1 }}>
            <WcIcon />
          </IconButton>
          <Font>Légal Check</Font>
        </IconWrapper>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Newsletter"
          />
          <FormControlLabel control={<Checkbox size="small" />} label="CGV" />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Cookies"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;
