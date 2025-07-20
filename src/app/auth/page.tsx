import { Typography, Box } from "@mui/material";

export default function AuthPage() {
  return (
    <Box sx={{ p: 3, bgcolor: "background.default", color: "secondary.main" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "secondary.main" }}>
        Authentication Page
      </Typography>
      <Typography paragraph sx={{ color: "secondary.main" }}>
        This section is for user authentication.
      </Typography>
    </Box>
  );
}
