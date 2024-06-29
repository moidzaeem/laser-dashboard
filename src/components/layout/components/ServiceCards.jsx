import { Box } from "@mui/material";

import { Font } from "../../../../utils/theme/typo";

const services = [
  {
    title: "Stop Tabac",
    logo: "images/1.png",
  },
  {
    title: "Stop Cannabis",
    logo: "/images/2.png",
  },
  {
    title: "Perte de poids",
    logo: "/images/3.png",
  },
  {
    title: "Addiction au sucre",
    logo: "/images/4.png",
  },
  {
    title: "Insomnie",
    logo: "/images/5.png",
  },
  {
    title: "Stress & Burn-Out",
    logo: "/images/6.png",
  },
  {
    title: "Tinnitus Problems",
    logo: "/images/7.png",
  },
  {
    title: "Ménopause",
    logo: "/images/8.png",
  },
];

const ServiceCards = () => {
  return (
    <Box mt={4}>
      <Font variant="h6" component="h2" sx={{ mb: 2 }}>
        Services disponibles dans mon centre
      </Font>
      <Box display="flex" flexWrap="wrap" gap={2}>
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              width: "calc(50% - 16px)",
              padding: 2,
              backgroundColor: "white",
              borderRadius: 2,
              textAlign: "center",
              gap: 1,
              border: "1px solid #D9D9D9",
            }}
          >
            <img src={service.logo} alt="" style={{ height: 40 }} />
            <Font variant="body1" component="p" sx={{ mt: 1 }}>
              {service.title}
            </Font>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServiceCards;
