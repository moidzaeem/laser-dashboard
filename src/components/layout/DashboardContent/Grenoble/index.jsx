import { hospitals } from "../../../../../utils/raw-data/data";
import HospitalCard from "../../components/HospitalCard";
import { Box, Button, InputAdornment } from "@mui/material";
import { Caption, Font } from "../../../../../utils/theme/typo";
import AppButton from "../../../ui/Button";
import AddIcon from "@mui/icons-material/Add";
import { InputField } from "../../../ui/Input";
import SearchIcon from "@mui/icons-material/Search";

const Grenoble = () => {
  return (
    <div>
      <Box sx={{ p: 4 }}>
        <Font sx={{ fontSize: 18, fontWeight: "bold" }}>
          LaserAddict center management
        </Font>
        <Caption sx={{ mt: 2, mb: 5 }}>
          Below is a list of LaserAddict centers in the CRM.
        </Caption>
        <Button
          sx={{ textTransform: "capitalize", background: "white" }}
          startIcon={<AddIcon />}
          variant="outlined"
          color="success"
        >
          Add a center
        </Button>
        <Button
          variant="outlined"
          color="success"
          sx={{ textTransform: "capitalize", background: "white" }}
        >
          Edit / Delete
        </Button>{" "}
        <br />
        <div style={{ height: 30 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: {
              lg: 70,
              xs: 2,
            },
            flexDirection: {
              lg: "row",
              xs: "column",
            },
          }}
        >
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
          />{" "}
          <AppButton text=" Display By" />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: "100%",
          minWidth: "100%",
        }}
      >
        {hospitals.map((hospital) => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}

        <Font>{hospitals.length === 0 && "No Items Found"}</Font>
      </Box>
    </div>
  );
};

export default Grenoble;
