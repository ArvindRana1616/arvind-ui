
import { Card, CardContent, Typography, Box } from "@mui/material";
import { EmojiObjects } from "@mui/icons-material";

const FeatureHighlightCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        p: 3,
        m: 2,
        borderRadius: 4,
        background: "linear-gradient(135deg, #f0f4c3 0%, #c8e6c9 100%)",
        boxShadow: 4,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={1}>
          <EmojiObjects color="primary" />
          <Typography variant="h6" fontWeight="bold">
            Innovative UI
          </Typography>
        </Box>
        <Typography variant="body2" mt={2}>
          Easily integrate visually appealing components into any modern React application.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureHighlightCard;
