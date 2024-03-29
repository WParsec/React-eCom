import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';

// Import CSS
import styles from './Navbar.module.scss';

export function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);    

    // Close nav when location changes
    const location = useLocation();
    useEffect(() => {
        setClick(false);
    }, [location]);

    // Redux
    const cartItems = useSelector((state) => state.cart);
    const [cart, setCart] = useState({count: 0});

    useEffect(() => {
        const count = cartItems.products.reduce((total, product) => {
          return total + product.quantity;
        }, 0);
        setCart({ count });
      }, [cartItems]);


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
                    <div className={styles.cart_wrap}>
                        <Link to="CheckoutPage" className={styles.cart}><AiOutlineShoppingCart color="black" size={24}></AiOutlineShoppingCart></Link>
                        {cart && cart.count > 0 && <span className={styles.cart_amount}>{cart.count}</span>}
                    </div>
                    <div className={styles.hamburger} onClick={handleClick}>
                            {click ? <FaTimes size={24} style={{color: "black"}}/> : <FaBars size={24} style={{color: "black"}}/>}
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Navbar;