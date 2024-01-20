import React, { useState } from "react";
import Styles from "./Intro.module.css";

const Intro = ({onNext}) => {

    return(
        <div className={Styles.wrapper}>
            <h1 className={Styles.title}>リラックス診断へようこそ！</h1>
            <button onClick={onNext} className={Styles.button}>GO</button>
        </div>
    );
};

export default Intro;