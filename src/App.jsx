import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import Home from "./Component/Home/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Banner from "./Component/Footer/Banner";
import Footer from "./Component/Footer/Footer";

function App() {
  // State to track the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Create the theme based on the current mode
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar toggleDarkMode={toggleDarkMode} buttonText={buttonText} />
        <div className="hero">
          <h2>Your Trip Starts Here</h2>
        </div>
        <Home />
        <Banner />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
