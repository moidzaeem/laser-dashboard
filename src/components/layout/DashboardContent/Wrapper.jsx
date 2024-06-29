import { Avatar, Badge, InputAdornment } from "@mui/material";
import CountrySelect from "../../ui/CountrySelect";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import { InputField } from "../../ui/Input";

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <div></div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <InputField
            placeholder="Search ..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="success" />
                </InputAdornment>
              ),
            }}
          />
          <CountrySelect />
          <Badge badgeContent={4} color="success">
            <NotificationsActiveIcon color="success" />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"
          />
        </Box>
      </Box>
      {children}
    </div>
  );
};

export default Wrapper;
