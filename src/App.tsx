
import { Container, Grid } from "@mui/material";
import HeroSection from "./components/HeroSection";
import ProfileCard from "./components/ProfileCard";
import PricingCard from "./components/PricingCard";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <HeroSection />
      <Grid container spacing={4} mt={2}>
        <Grid item xs={12} md={4}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <PricingCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard />
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default HomePage;
