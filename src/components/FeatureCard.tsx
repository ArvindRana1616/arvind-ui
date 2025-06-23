
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Code } from "@mui/icons-material";

const FeatureCard = () => {
  return (
    <Card sx={{ p: 3, background: "#e1f5fe", borderRadius: 4, textAlign: "center", boxShadow: 2 }}>
      <CardContent>
        <Code fontSize="large" color="primary" />
        <Typography variant="h6" mt={1}>
          Built with React
        </Typography>
        <Typography variant="body2" mt={1}>
          Optimized and fast-loading UI components.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
