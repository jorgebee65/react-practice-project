import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import NavBar from "../components/NavBar";

const Layout = ({children}) => {
    return (
        <div className="Layout">
            <Header/>
            <h1>Banamex Layout</h1>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;