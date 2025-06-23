
import { Card, CardContent, Typography, Box, Chip, Button } from "@mui/material";

interface Plan {
  type: string;
  price: string;
  features: string[];
  color: string;
}

const plans: Plan[] = [
  {
    type: "Starter",
    price: "₹499",
    features: ["1 Project", "Email Support"],
    color: "#e3f2fd",
  },
  {
    type: "Pro",
    price: "₹999",
    features: ["Unlimited Projects", "Priority Support"],
    color: "#e8f5e9",
  },
];

const PlanSelectionCard = () => {
  return (
    <Box display="flex" gap={3} justifyContent="center" mt={5}>
      {plans.map((plan) => (
        <Card
          key={plan.type}
          sx={{
            minWidth: 250,
            p: 2,
            background: plan.color,
            borderRadius: 4,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <CardContent>
            <Chip label={plan.type} color="secondary" sx={{ mb: 1 }} />
            <Typography variant="h5" fontWeight="bold">
              {plan.price}/month
            </Typography>
            <Box mt={2}>
              {plan.features.map((f) => (
                <Typography variant="body2" key={f}>
                  ✅ {f}
                </Typography>
              ))}
            </Box>
            <Button variant="contained" sx={{ mt: 2 }}>
              Choose
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default PlanSelectionCard;
