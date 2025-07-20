"use client";

import { Typography, Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box sx={{ p: 3, bgcolor: "background.default", color: "secondary.main" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "secondary.main" }}>
        Welcome to the Home Page!
      </Typography>
      <Typography paragraph sx={{ color: "secondary.main" }}>
        This is the main content area. It will adjust its width based on the
        sidebar's state.
      </Typography>
      <Typography paragraph sx={{ color: "secondary.main" }}>
        Use the arrow icon in the sidebar to toggle its visibility.
      </Typography>
    </Box>
  );
}
