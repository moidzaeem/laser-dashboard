import { Box, Typography, Grid, Paper, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Font } from "../../../../utils/theme/typo";

const appointments = [
  {
    date: "2024-04-06",
    time: "08.00 - 09.00",
    name: "Sarah Cook",
    service: "Stop Cannabis",
    color: "lightblue",
  },
  {
    date: "2024-04-06",
    time: "10.00 - 11.00",
    name: "Tom David",
    service: "Stress & Burnout",
    color: "lightyellow",
  },
];

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
const dates = ["05", "06", "07", "08", "09", "10"];

const Calendar = () => {
  const [view, setView] = useState("Weekly");

  return (
    <Box
      sx={{ p: 4, backgroundColor: "#fff", borderRadius: "20px", boxShadow: 1 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>
          April 6th, 2024
        </Typography>
        <Select
          value={view}
          onChange={(e) => setView(e.target.value)}
          displayEmpty
          sx={{ mr: 2 }}
        >
          <MenuItem value="Weekly">Weekly</MenuItem>
          <MenuItem value="Monthly">Monthly</MenuItem>
        </Select>
      </Box>
      <Grid container spacing={1}>
        {days.map((day, index) => (
          <Grid item xs={12} sm={2.4} key={index} sx={{ textAlign: "center" }}>
            <Box className="shadow" sx={{ p: 2 }}>
              <Font sx={{ fontSize: 12 }}>{day}</Font>
              <Font>{dates[index]}</Font>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1}>
        {days.map((_, index) => (
          <Grid
            item
            xs={12}
            sm={2.4}
            key={index}
            sx={{ border: "1px solid #e0e0e0", minHeight: 100 }}
          >
            {appointments
              .filter(
                (appt) =>
                  new Date(appt.date).getDate() === parseInt(dates[index])
              )
              .map((appt, i) => (
                <Paper
                  key={i}
                  sx={{ backgroundColor: appt.color, p: 1, mb: 1 }}
                >
                  <Font>
                    <b> {appt.time}</b>
                  </Font>
                  Font
                  <Font sx={{ fontSize: 12 }}>{appt.name}</Font>
                  <Font sx={{ fontSize: 12 }}>{appt.service}</Font>
                </Paper>
              ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Calendar;
