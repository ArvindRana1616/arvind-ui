
import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        px: 2,
        background: "linear-gradient(to right, #fceabb, #f8b500)",
        color: "#333",
        borderRadius: 4,
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Modern UI Showcase
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        React + MUI + Tailwind Styled Components
      </Typography>
      <Box mt={3}>
        <Button variant="contained" sx={{ mr: 2 }}>
          View on GitHub
        </Button>
        <Button variant="outlined">Live Preview</Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
