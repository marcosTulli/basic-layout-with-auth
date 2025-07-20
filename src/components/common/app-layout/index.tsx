"use client";

import type React from "react";
import { Box } from "@mui/material";
import { Navbar } from "@components/common/Navbar";
import { Sidebar } from "@components/common/sidebar";
import { MainPageContainer } from "@components/common/pages/MainPageContainer";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Navbar />
      <Sidebar />
      <MainPageContainer>{children}</MainPageContainer>
    </Box>
  );
}
