import "./App.css";
import React from "react";
import Routing from "./Navigation/Routes";
import NavBar from "./Navigation/NavBar";
import Footer from "./Components/Footer";
import "animate.css";
import "animate.css/animate.min.css";
import MyCookieBanner from "./Reusable/CookieBar/MyCookieBanner";
import { useLocation } from "react-router-dom";
import NavBarBeta from "./Navigation/NavBarBeta";
import FooterBeta from "./Components/FooterBeta";
import ScrollToTopButton from "./Reusable/ScrollToTopButton";

export function baseUrl() {
  return process.env.REACT_APP_NODE_ENV === "prod"
    ? process.env.REACT_APP_BASE_URL
    : `${process.env.REACT_APP_NODE_ENV}.${process.env.REACT_APP_PROJECT}.${process.env.REACT_APP_BASE_URL}`;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTopButton />

      {!location.pathname.includes("accessoanticipato") ? (
        <NavBar />
      ) : (
        <NavBarBeta />
      )}
      <Routing />
      {!location.pathname.includes("accessoanticipato") ? (
        <Footer />
      ) : (
        <FooterBeta />
      )}
      <MyCookieBanner />
    </>
  );
}

export default App;
