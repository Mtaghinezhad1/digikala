import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./page/Home";
import Product from "./page/Product"
import ToggleMenu from "./component/header/ToggleMenu";
import SimpleModal from "./component/header/Modal";
import SabadeKharid from "./page/SabadeKharid";
import SignUp from "./page/SignUp";




function App() {
  return (
    <>

      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <ToggleMenu />
          <SimpleModal />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/sabadekharid" element={<SabadeKharid />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </React.StrictMode>





    </>

  );
}

export default App;
