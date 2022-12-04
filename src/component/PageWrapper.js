import React from "react";
import Footer from "./footer/Footer";
import ToggleMenu from "./header/ToggleMenu";
import Header from "./header/Header";


const PageWrapper = ({ children }) => {


    return <div>
        <Header />
        <ToggleMenu />
        {children}
        <Footer />

    </div>
}



export default PageWrapper;