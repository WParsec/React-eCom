import React from 'react';
import { Navbar } from '../Navbar';

// Import styles
import styles from './Header.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <Navbar />
        </header>
    );
}

export default Header;
