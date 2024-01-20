import React, { useState } from "react";
import Styles from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return(
        <div className={Styles.wrapper}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;