import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Caption, Font } from "../../../../../utils/theme/typo";
import AddIcon from "@mui/icons-material/Add";
import StatisticsCardMap from "../../components/StatisticCard";
import LatestBilling from "../../components/LatestBilling";
import RevenueByPaymentMethod from "../../components/RevenueByPaymentMethod";
import RevenueByService from "../../components/RevenueByService";

const Statistic = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Box
        sx={{
          p: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: isSmallScreen ? "column" : "row",
          textAlign: isSmallScreen ? "center" : "left",
        }}
      >
        <Box mb={isSmallScreen ? 2 : 0}>
          <Font sx={{ fontSize: 18, fontWeight: "bold" }}>Statistics</Font>
          <Caption>
            Below you will find the center statistics for the selected period.
          </Caption>
        </Box>
        <Box>
          <Button
            sx={{
              textTransform: "capitalize",
              background: "white",
              mr: isSmallScreen ? 0 : 2,
            }}
            startIcon={<AddIcon />}
            variant="outlined"
            color="success"
          >
            Grenoble
          </Button>
          <Button
            variant="outlined"
            color="success"
            sx={{
              textTransform: "capitalize",
              background: "white",
              mt: isSmallScreen ? 2 : 0,
            }}
          >
            Monthly
          </Button>
        </Box>
      </Box>
      <StatisticsCardMap />
      <Grid container spacing={7} sx={{ p: 2 }}>
        <Grid item xs={12} md={4}>
          <RevenueByService />
        </Grid>
        <Grid item xs={12} md={4}>
          <RevenueByPaymentMethod />
        </Grid>
        <Grid item xs={12} md={4}>
          <LatestBilling />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Statistic;
