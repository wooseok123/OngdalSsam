import "./App.css";
import { Reset } from "styled-reset";

import Header from "./components/Header";
import Main from "./pages/Main";

import HeaderMobile from "./components/HeaderMobile";
import { AppContainer } from "./styledComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import About from "./pages/About";
import WaterFilter from "./pages/WaterFilter";
import WaterNews from "./pages/WaterNews";
import WaterTest from "./pages/WaterTest";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Helper from "./components/Helper";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1450px)" });

  return (
    <BrowserRouter>
      <AppContainer>
        {isTabletOrMobile ? <HeaderMobile /> : <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/filter" element={<WaterFilter />} />
          <Route path="/news" element={<WaterNews />} />
          <Route path="/test" element={<WaterTest />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Helper />
        <Footer />
        <Reset />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
