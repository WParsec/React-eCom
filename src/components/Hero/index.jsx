import React from "react";

// Import styles
import styles from "./Hero.module.scss";

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={`container ${styles.hero_wrap}`}>
                <h1>Everyday stuff you don't need</h1>
                <p>But the design is cool and the code is alright</p>
            </div>
        </div>
    );
}

export default Hero;