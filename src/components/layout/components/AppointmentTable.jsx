import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
} from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import EditIcon from "@mui/icons-material/Edit";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { primary } from "../../../../utils/theme/colors";

// Sample data
const appointments = [
  {
    date: "06.04.24",
    time: "09.30",
    service: "Cannabis",
    practitioner: "Léa G.",
    customer: "CHEVASSUT",
  },
  {
    date: "06.04.24",
    time: "09.30",
    service: "Cannabis",
    practitioner: "Léa G.",
    customer: "CHEVASSUT",
  },
  {
    date: "06.04.24",
    time: "09.30",
    service: "Cannabis",
    practitioner: "Léa G.",
    customer: "CHEVASSUT",
  },
];

const AppointmentTable = () => {
  return (
    <Box className="shadow" sx={{ p: 4, borderRadius: "20px" }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>
        Upcoming events
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Practitioner</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Quick Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment, index) => (
              <TableRow key={index}>
                <TableCell sx={{ display: "flex", alignItems: "center" }}>
                  <PlayArrowIcon sx={{ mb: 0.1 }} color="primary" />
                  {appointment.date}
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">{appointment.time}</Typography>
                </TableCell>
                <TableCell>{appointment.service}</TableCell>
                <TableCell>{appointment.practitioner}</TableCell>
                <TableCell>{appointment.customer}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton sx={{ background: primary }}>
                      <FolderOpenIcon sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton sx={{ background: primary }}>
                      <EditIcon sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton sx={{ background: primary }}>
                      <PhoneIcon sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton sx={{ background: primary }}>
                      <MailOutlineIcon sx={{ color: "white" }} />
                    </IconButton>
                    <IconButton sx={{ background: primary }}>
                      <CheckCircleOutlineIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AppointmentTable;
