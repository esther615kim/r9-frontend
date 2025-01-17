import React from "react";
import { Box, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import Navbar from "./Navbar";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: grey[50],
      }}
    >
      <Navbar />
      <Container
        sx={{
          paddingY: {
            xs: 2,
            sm: 3,
          },
        }}
      >
        {children}
      </Container>
    </Box>
  );
};
