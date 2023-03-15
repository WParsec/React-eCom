import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';

// Import CSS
import styles from './Navbar.module.scss';

export function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);    

    // Redux
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems);
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
                        <Link to="Cart" className={styles.cart}><AiOutlineShoppingCart size={24}></AiOutlineShoppingCart></Link>
                        {cart && cart.count > 0 && <span className={styles.cart_amount}>{cart.count}</span>}
                    </div>
                    <div className={styles.hamburger} onClick={handleClick}>
                            {click ? <FaTimes size={24} style={{color: "#fff"}}/> : <FaBars size={24} style={{color: "#fff"}}/>}
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Navbar;