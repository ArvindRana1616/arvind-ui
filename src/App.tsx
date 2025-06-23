
import { useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline, Container, Grid, Box, AppBar, Toolbar, Typography } from "@mui/material";
import HeroSection from "./components/HeroSection";
import ProfileCard from "./components/ProfileCard";
import PricingCard from "./components/PricingCard";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
    }), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">Component Showcase</Typography>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
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
    </ThemeProvider>
  );
};

export default HomePage;
