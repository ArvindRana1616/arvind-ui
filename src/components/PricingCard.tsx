
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const PricingCard = () => {
  return (
    <Card sx={{ p: 3, borderRadius: 4, background: "#fffde7", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Pro Plan
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          ₹999/mo
        </Typography>
        <Typography variant="body2">✔️ 10 Projects</Typography>
        <Typography variant="body2">✔️ Email Support</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Subscribe
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
