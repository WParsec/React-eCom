import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

export function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <div className="footer-logo"></div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;