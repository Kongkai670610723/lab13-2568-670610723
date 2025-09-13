//main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider, createTheme, virtualColor } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Kanit,sans-serif",
  colors: {
    Phurin: virtualColor({
      name: "Phurin",
      dark: "yellow",
      light: "violet",
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
