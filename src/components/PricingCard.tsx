import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  Box,
} from "@mui/material";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  highlight?: boolean;
  ribbon?: string;
  disabled?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  highlight,
  ribbon,
  disabled,
}) => {
  return (
    <Box position="relative">
      {ribbon && (
        <Box
          sx={{
            position: "absolute",
            top: -10,
            right: -10,
            backgroundColor: "orange",
            color: "#fff",
            px: 2,
            py: 0.5,
            borderRadius: "0 8px 0 8px",
            fontSize: "0.75rem",
            zIndex: 1,
          }}
        >
          {ribbon}
        </Box>
      )}

      <Card
        sx={{
          maxWidth: 300,
          borderRadius: 3,
          m: 2,
          boxShadow: highlight ? 6 : 2,
          border: highlight ? "2px solid #1976d2" : "none",
          opacity: disabled ? 0.6 : 1,
          transition: "0.3s",
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {plan}
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            {price}
          </Typography>
          <List>
            {features.map((f, i) => (
              <ListItem key={i} sx={{ pl: 0 }}>
                ✅ {f}
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={disabled}
          >
            {disabled ? "Coming Soon" : "Choose Plan"}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PricingCard;