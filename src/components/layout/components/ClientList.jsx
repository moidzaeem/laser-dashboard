import {
  Box,
  Button,
  InputAdornment,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WcIcon from "@mui/icons-material/Wc";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import { Font } from "../../../../utils/theme/typo";
import { InputField } from "../../ui/Input";

const ClientList = () => {
  const clients = [
    {
      name: "Sarah Cook",
      id: "LA-1",
      email: "sarah98@gmail.com",
      phone: "+33 6 34 24 96 67",
      birthDate: "23/04/2001",
      favoriteCenter: "Porto Vecchio",
      gender: "Femme",
      services: ["Stop Tobacco", "Stop Cannabis"],
      avatar:
        "https://img.freepik.com/free-photo/portrait-young-teen-tourist-visiting-great-wall-china_23-2151261879.jpg",
    },
    {
      name: "Jimmy Drake",
      details: "Lorem ipsum dolor sit amet",
      avatar:
        "https://img.freepik.com/free-photo/portrait-young-teen-tourist-visiting-great-wall-china_23-2151261879.jpg",
    },
    {
      name: "Susan Kathy",
      details: "Lorem ipsum dolor sit amet",
      avatar:
        "https://img.freepik.com/free-photo/portrait-young-teen-tourist-visiting-great-wall-china_23-2151261879.jpg",
    },
  ];

  return (
    <Box p={2} sx={{ backgroundColor: "#fff", borderRadius: 2, mt: 4 }}>
      <Font sx={{ fontSize: 18, mb: 4, mt: 3 }}>
        <b>Clients Centre par date de rdv</b>
      </Font>
      <InputField
        fullWidth
        placeholder="Search ..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="success" />
            </InputAdornment>
          ),
        }}
      />
      <div style={{ height: 20 }} />
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "flex-start",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              <Avatar
                alt="Sarah Cook"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSi6bIxc3Vn4OIvjrLZPOkwChPxxGJ_K-5XA&usqp=CAU"
              />
              <Font>
                <b>Sophia Cook</b>{" "}
              </Font>
            </Box>
            <Button
              variant="contained"
              color="success"
              size="small"
              startIcon={<AddIcon />}
              sx={{ mt: 1, background: "#21A282", borderRadius: 100 }}
            >
              Ajouter
            </Button>
          </ListItemAvatar>
        </ListItem>
        <Box sx={{ ml: 3, mt: 4 }}>
          <Font>
            <Grid container alignItems={"center"} spacing={1}>
              <Grid item lg={6} xs={12}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <MailOutlineIcon sx={{ mr: 2 }} /> ID Client: {clients[0].id}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <MailOutlineIcon sx={{ mr: 2 }} /> Adresse Mail:{" "}
                  {clients[0].email}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2 }} /> Téléphone: {clients[0].phone}
                </Box>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CalendarTodayIcon sx={{ mr: 2 }} /> Date Naissance:{" "}
                  {clients[0].birthDate}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2 }} /> Centre Favoris:{" "}
                  {clients[0].favoriteCenter}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <WcIcon sx={{ mr: 2 }} /> Genre: {clients[0].gender}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <NotInterestedIcon sx={{ mr: 2 }} /> Services Sélectionnés:{" "}
                  {clients[0].services.join(", ")}
                </Box>
              </Grid>
            </Grid>
          </Font>
        </Box>
        <Divider variant="inset" component="li" />
        {clients.slice(1).map((client) => (
          <ListItem key={client.name} alignItems="center">
            <ListItemAvatar>
              <Avatar alt={client.name} src={client.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={client.name}
              secondary={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Font component="span" variant="body2" color="textPrimary">
                    {client.details}
                  </Font>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{
                      mt: 1,
                      background: "#BCD7EE",
                      borderRadius: 100,
                      color: "#1A7ACB",
                    }}
                  >
                    New
                  </Button>
                </div>
              }
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ textAlign: "end" }}>
        <Button
          sx={{ mt: 1, background: "#21A282", borderRadius: 2 }}
          variant="contained"
          color="primary"
        >
          Visit Page
        </Button>
      </Box>
    </Box>
  );
};

export default ClientList;
