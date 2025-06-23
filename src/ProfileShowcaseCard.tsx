
import { Card, CardContent, Typography, Avatar, Box, Chip } from "@mui/material";

const ProfileShowcaseCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        mx: "auto",
        mt: 5,
        p: 2,
        background: "linear-gradient(to right, #e0f7fa, #fff1f2)",
        borderRadius: 4,
        boxShadow: 5,
        textAlign: "center",
      }}
    >
      <Avatar
        sx={{ width: 100, height: 100, mx: "auto", mb: 2, boxShadow: 3 }}
        src="/avatar.png"
        alt="Profile"
      />
      <Typography variant="h6">Frontend Developer</Typography>
      <Chip label="UI Specialist" color="primary" sx={{ mt: 1 }} />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Specialized in modern UI using React & MUI
      </Typography>
    </Card>
  );
};

export default ProfileShowcaseCard;
