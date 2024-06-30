import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Checks", value: 95.86, color: "#4caf50" },
  { name: "Bank cards", value: 234.2, color: "#2196f3" },
  { name: "Cash", value: 181.34, color: "#00bcd4" },
];

const renderCustomizedLabel = ({ percent }) => {
  return `${(percent * 100).toFixed(0)}%`;
};

const RevenueByPaymentMethod = () => {
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
        Revenues by payment method
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
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          formatter={(value, entry) => (
            <span style={{ fontWeight: "bold", color: entry.color }}>
              {value}
            </span>
          )}
        />
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
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {entry.name}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {entry.value.toFixed(2)} €
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RevenueByPaymentMethod;
