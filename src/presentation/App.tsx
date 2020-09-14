import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {ScrollToTop} from "./routes/ScrollToTop";
import {Routes} from "./routes/Routes";
import {Header} from "./components/Header";
import styled, {ThemeProvider} from "styled-components";
import {Footer} from "./components/Footer";

const Container = styled.article`
  margin-top: 40px;
  min-height: 80vh;
`
const theme = {
  primaryColor: '#d81b60',
  primaryLightColor: '#ff5c8d',
  primaryDarkColor: '#a00037',
  textOnPrimaryColor: '#ffffff',
  secondaryColor: '#ff7043',
  secondaryLightColor: '#ffa270',
  secondaryDarkColor: '#c63f17',
  textOnSecondaryColor: '#ffffff',
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop/>
        <Header/>
        <Container>
          <Routes/>
        </Container>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}
