
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", py: 3, mt: 4, background: "#f1f1f1", borderRadius: 2 }}>
      <Typography variant="body2" color="text.secondary">
        Sample Project – All components are for demo purposes.
      </Typography>
    </Box>
  );
};

export default Footer;
