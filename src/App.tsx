import React from "react";
import { CssBaseline, Container, Typography } from "@mui/material";
import ProfileCard from "./components/ProfileCard";
import PricingCard from "./components/PricingCard";

const plans = [
  {
    plan: "Pro",
    price: "₹999/month",
    features: ["10 Users", "Priority Support", "Unlimited Projects"],
    highlight: true,
    ribbon: "Most Popular",
  },
  {
    plan: "Basic",
    price: "₹499/month",
    features: ["2 Users", "Email Support"],
    disabled: true,
    ribbon: "Coming Soon",
  },
  {
    plan: "Enterprise",
    price: "₹1999/month",
    features: ["Unlimited Users", "24x7 Support", "Dedicated Manager"],
  },
];

function App() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Arvind UI Components
        </Typography>
        <ProfileCard />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: 32 }}>
          {plans.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default App;