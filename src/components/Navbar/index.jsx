import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';


// Import CSS
import styles from './Navbar.module.scss';

export function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [cart, setCart] = useState({count: 0});
    const handleCart = () => {
        setCart({count: cart.count + 1});
        console.log(cart)
    }

    return (
        <div className="container">
            <div className={styles.navbar}>
                <Link to="/" className={styles.logo}><div>Daily</div></Link>
                <ul className={click ? `${styles.menu} ${styles.active}` : styles.menu}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
                <div className='flex-row'>
                    <Link to="Cart" className={styles.cart}><AiOutlineShoppingCart onClick={handleCart} size={24}>{cart ? <span>{cart.count}</span> : ""}</AiOutlineShoppingCart></Link>
                    <div className={styles.hamburger} onClick={handleClick}>
                            {click ? <FaTimes size={24} style={{color: "#fff"}}/> : <FaBars size={24} style={{color: "#fff"}}/>}
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Navbar;