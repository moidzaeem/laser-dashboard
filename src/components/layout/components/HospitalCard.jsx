/* eslint-disable react/prop-types */
import { Box, CardContent } from "@mui/material";
import { primary } from "../../../../utils/theme/colors";
import { Font } from "../../../../utils/theme/typo";

const HospitalCard = ({ hospital }) => {
  return (
    <Box
      sx={{
        width: 180,
        m: 2,
        borderRadius: 4,
        cursor: "pointer",
        border: "2px solid",
        borderColor: "#D9D9D9",
        transition: "border-color 0.3s ease-in-out",
        "&:hover": {
          borderColor: primary,
        },
        boxShadow: "0px 6.71px 18.31px 12.21px rgba(0, 0, 0, 0.05);",
      }}
    >
      <CardContent>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <img style={{ height: 40 }} src={hospital.img} alt={hospital.name} />
        </Box>
        <Font
          sx={{ fontWeight: "bold", mt: 1, width: "100%", textAlign: "left" }}
        >
          {hospital.name}
        </Font>
        <Font sx={{ mt: 1, textAlign: "left" }}>{hospital.region}</Font>
      </CardContent>
    </Box>
  );
};

export default HospitalCard;
