import { Box, Button, Divider, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import { Font } from "../../../../utils/theme/typo";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";

const AppointmentScheduler = () => {
  return (
    <Box
      sx={{
        p: {
          lg: 4,
          xs: 4,
        },
        backgroundColor: "white",
        borderRadius: 2,
        mt: 9,
      }}
      className="shadow"
    >
      <Box
        sx={{
          display: {
            lg: "flex",
            xs: "block",
          },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Font>
          <b> Rendez-vous Centre</b>
        </Font>
        <Button
          variant="contained"
          color="success"
          size="small"
          sx={{ background: "#21A282", textTransform: "capitalize" }}
          startIcon={<AddCircleIcon />}
        >
          Ajouter un nouveau rdv
        </Button>
      </Box>
      <Grid spacing={3} container>
        <Grid xs={12} lg={2} sx={{ color: "green" }}>
          <Font> 09.00 AM</Font>
        </Grid>
        <Grid xs={12} lg={10}>
          <Box sx={{ display: "flex" }}>
            <ArrowRightIcon sx={{ color: "grey" }} />
            <Font sx={{ ml: 2, mr: 2, color: "grey" }}>10.00 AM</Font>
            <Font sx={{ color: "grey" }}>John Doe</Font>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ArrowRightIcon sx={{ color: "grey" }} />
            <Font sx={{ ml: 2, mr: 2, color: "grey" }}>10.30 AM</Font>
            <Font sx={{ color: "grey" }}>Jacob Willson</Font>
          </Box>
        </Grid>
        <Grid xs={12} lg={2} sx={{ color: "green" }}>
          <Font> 09.00 AM</Font>
        </Grid>
        <Grid xs={12} lg={10}>
          <Box sx={{ display: "flex" }}>
            <ArrowRightIcon sx={{ color: "grey" }} />
            <Font sx={{ ml: 2, mr: 2, color: "grey" }}>11.00 AM</Font>
            <Font sx={{ color: "grey" }}>John Doe</Font>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ArrowRightIcon sx={{ color: "grey" }} />
            <Font sx={{ ml: 2, mr: 2, color: "grey" }}>11.30 AM</Font>
            <Font sx={{ color: "grey" }}>Jacob Willson</Font>
          </Box>
          <Box
            className="shadow"
            sx={{
              p: 3,
              backgroundColor: "white",
              borderRadius: 2,
              mt: 4,
              width: {
                lg: "400",
                xs: "100%",
              },
            }}
          >
            <Box display={"flex"} gap={4}>
              <Font sx={{ mb: 2, fontWeight: "bold" }}>Client Name</Font>
              <Font variant="body1" sx={{ mb: 1 }}>
                Tom Daniel
              </Font>
            </Box>
            <Box display={"flex"} gap={4}>
              <Font sx={{ mb: 2, fontWeight: "bold" }}> Scheduled Time:</Font>
              <Font variant="body1" sx={{ mb: 1 }}>
                10.30 to 11.00 AM
              </Font>
            </Box>
            <Box display={"flex"} gap={4}>
              <Font sx={{ mb: 2, fontWeight: "bold" }}> 012 345 6789</Font>
              <Font variant="body1" sx={{ mb: 1 }}>
                tom@gmail.com
              </Font>
            </Box>
            <Divider />
            <Box
              sx={{
                display: {
                  xs: "flex",
                },
                justifyContent: "space-between",
                mt: 3,
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <IconButton
                color="success"
                sx={{
                  background: "#21A282",
                  "&:hover": {
                    background: "#1d8f6d",
                  },
                }}
              >
                <DeleteIcon color="success" sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                color="success"
                sx={{
                  background: "#21A282",
                  "&:hover": {
                    background: "#1d8f6d",
                  },
                }}
              >
                <PhoneIcon color="success" sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                color="success"
                sx={{
                  background: "#21A282",
                  "&:hover": {
                    background: "#1d8f6d",
                  },
                }}
              >
                <MessageIcon color="success" sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                color="success"
                sx={{
                  background: "#21A282",
                  "&:hover": {
                    background: "#1d8f6d",
                  },
                }}
              >
                <PersonIcon color="success" sx={{ color: "white" }} />
              </IconButton>

              <Button
                sx={{ background: "#21A282" }}
                variant="contained"
                color="success"
              >
                Start
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentScheduler;
