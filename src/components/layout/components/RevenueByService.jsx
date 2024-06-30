import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Stop Tabac", value: 12.5, color: "#ef5350", icon: "🚭" },
  { name: "Stop Cannabis", value: 12.5, color: "#4caf50", icon: "🌿" },
  { name: "Weight loss", value: 12.5, color: "#2196f3", icon: "💪" },
  { name: "Menopause", value: 12.5, color: "#e91e63", icon: "♀️" },
  { name: "Tinnitus", value: 12.5, color: "#9e9e9e", icon: "🦻" },
  { name: "Stress", value: 12.5, color: "#ff4081", icon: "😓" },
  { name: "Stop Sugar", value: 12.5, color: "#ff1744", icon: "🍭" },
  { name: "Insomnia", value: 12.5, color: "#ff9100", icon: "🌙" },
];

const renderCustomizedLabel = ({ percent }) => {
  return `${(percent * 100).toFixed(1)}%`;
};

const RevenueByService = () => {
  return (
    <Box
      className="shadow"
      sx={{
        p: 3,
        borderRadius: 2,
        width: {
          lg: 400,
          xs: "100%",
        },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Revenues by service
      </Typography>
      <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
        From 1-31 March, 2022
      </Typography>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          innerRadius={40}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <Box>
        {data.map((entry, index) => (
          <Box
            key={index}
            sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: entry.color,
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Typography variant="body2" sx={{ fontWeight: "bold", mr: 1 }}>
                {entry.icon}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {entry.name}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {entry.value}%
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RevenueByService;
