import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import { green, red } from "@mui/material/colors";
import { primary } from "../../../../utils/theme/colors";

const data = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    status: "Inactive",
  },
];

const StatusButton = styled(Button)(({ status }) => ({
  backgroundColor: status === "Active" ? primary : red[500],
  color: "white",
  textTransform: "capitalize",
  borderRadius: 20,
  "&:hover": {
    backgroundColor: status === "Active" ? green[700] : red[700],
  },
  width: "100%",
}));

const ClientListTable = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
        Tous les clients
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{ color: "green", marginBottom: 2 }}
      >
        Active Members
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom Client</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.company}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <IconButton
                    sx={{
                      background: primary,
                      borderRadius: "10px",
                    }}
                  >
                    <PhoneIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      background: primary,
                      borderRadius: "10px",
                      mr: 1,
                      ml: 1,
                    }}
                  >
                    <EditIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      background: primary,
                      borderRadius: "10px",
                    }}
                  >
                    <PersonIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      background: primary,
                      borderRadius: "10px",
                      mr: 1,
                      ml: 1,
                    }}
                  >
                    <DescriptionIcon sx={{ color: "white" }} />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <StatusButton status={row.status}>{row.status}</StatusButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClientListTable;
