
import { Card, CardContent, Typography, Avatar, Box, Chip } from "@mui/material";

const ProfileCard = () => {
  return (
    <Card sx={{ p: 2, textAlign: "center", borderRadius: 4, boxShadow: 4, background: "#f0f4f8" }}>
      <Avatar
        src="/avatar.png"
        alt="Profile"
        sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}
      />
      <Typography variant="h6">UI Developer</Typography>
      <Chip label="React + MUI" color="primary" size="small" sx={{ mt: 1 }} />
      <Typography variant="body2" sx={{ mt: 1 }}>
        Clean and reusable components
      </Typography>
    </Card>
  );
};

export default ProfileCard;
