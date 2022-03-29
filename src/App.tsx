import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./route/route";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Prompt",
  },
  palette: {
    primary: {
      main: "#ce5ffc",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <RecoilRoot>
      <Router>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </QueryClientProvider>
      </Router>
    </RecoilRoot>
  );
}

export default App;
