import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Stack,
  Button,
  Box,
} from "@mui/material";
import { Code as CodeIcon } from "@mui/icons-material";

const techStack = ["React", "Material UI", "Tailwind CSS", "HTML5", "CSS3"];

const ProfileCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        borderRadius: 4,
        boxShadow: 5,
      }}
    >
      <Box textAlign="center">
        <Avatar
          sx={{ width: 80, height: 80, mx: "auto", mb: 2, bgcolor: "primary.main" }}
        >
          <CodeIcon fontSize="large" />
        </Avatar>
        <Typography variant="h6" fontWeight={600}>
          Arvind Rana
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Sr. Frontend Developer — 8+ Years Experience
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" mb={2}>
          {techStack.map((tech, i) => (
            <Chip key={i} label={tech} color="primary" variant="outlined" size="small" />
          ))}
        </Stack>
        <Typography variant="body2" mb={3}>
          Specialized in building clean, static & responsive UI components using React and modern CSS frameworks.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="primary">
            View Projects
          </Button>
          <Button variant="outlined" color="primary">
            Hire Me
          </Button>
        </Stack>
      </Box>
    </Card>
  );
};

export default ProfileCard;