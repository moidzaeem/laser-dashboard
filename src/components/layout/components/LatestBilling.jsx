import { Box, Typography } from "@mui/material";
import AppButton from "../../ui/Button";

const billingData = [
  {
    name: "Chloe Wallows",
    location: "LA Grenoble",
    amount: "60.00€",
    date: "1 Jun 2022",
  },
  {
    name: "Chloe Wallows",
    location: "LA Corse",
    amount: "60.00€",
    date: "1 May 2022",
  },
  {
    name: "Chloe Wallows",
    location: "LA Paris",
    amount: "60.12€",
    date: "1 Apr 2022",
  },
  {
    name: "Chloe Wallows",
    location: "LA Annecy",
    amount: "60.12€",
    date: "1 Mar 2022",
  },
  {
    name: "Chloe Wallows",
    location: "LA Marseille",
    amount: "60.12€",
    date: "1 Feb 2022",
  },
  {
    name: "Chloe Wallows",
    location: "LA Montbonnot",
    amount: "60.12€",
    date: "1 Jan 2022",
  },
];

const LatestBilling = () => {
  return (
    <Box
      className="shadow"
      sx={{
        p: 3,
        borderRadius: 2,
        width: {
          lg: 350,
          xs: "100%",
        },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Latest billing
      </Typography>
      {billingData.map((billing, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {billing.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {billing.location}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {billing.date}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", textAlign: "right" }}
          >
            {billing.amount}
          </Typography>
        </Box>
      ))}

      <Box textAlign={"center"}>
        <AppButton text="All invoices " />
      </Box>
    </Box>
  );
};

export default LatestBilling;
