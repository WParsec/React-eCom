import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";
import "../../scss/main.scss"

export function Footer() {
    return (
        <footer>
            <section>
                <div className="container">
                    <div>
                        <ul className={styles.footer_links}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;