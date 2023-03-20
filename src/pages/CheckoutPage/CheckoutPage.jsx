import React from "react";

// Components
import BackButton from "../../components/BackButton";

// Redux
import { useSelector } from "react-redux";

// Pages
import { Link } from "react-router-dom";

// Import styles
import '../../scss/main.scss'
import styles from './CheckoutPage.module.scss'


export function CheckoutPage() {
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    const products = cart.products;
    console.log(products)
  
    return (
      <main>
        <section className="border-bottom">
          <div className={`container`}>
            <BackButton />
          </div>
        </section>
        <section>
          <div className="container">
            <h1 className={styles.heading}>Checkout</h1>
            <div className={styles.cart_wrap}>
              {products && products.length > 0 ? (
                products.map(({ id, imageUrl, title, discountedPrice, quantity, rating }) => {
  
                  return (
                    <div className={styles.cart_item} key={id}>
                        <div className={styles.img_wrap}>
                          <img src={imageUrl} alt={title} />
                        </div>
                        <div className={styles.right_wrap}>
                          <div className={styles.cart_item_info}>
                              <h3>{title}</h3>
                              <p>Rating: {rating > 0 ? rating : "No rating"}</p>
                          </div>
                          <div className={styles.right}>
                              <h3 className={styles.price}>Price: ${discountedPrice}</h3>
                              <div className={styles.quantity_wrap}>
                                  <p>Quantity: {quantity}</p>
                                  <div className={styles.quantity_adjuster}>
                                      <button className="btn">+</button>
                                      <button className="btn">-</button>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                  );
                })
              ) : (
                <div className={styles.cart_empty}>
                    <p>Your cart is empty</p>
                </div>
              )}
            </div>
            {products && products.length > 0 ? (
                <div className={styles.checkout}>
                  <div className={styles.checkout_wrap}>
                    <div className={styles.checkout_info}>
                      <div>
                        <p>Subtotal: ${cart.cartTotal.toFixed(2)}</p>
                        <p>Shipping: FREE</p>
                      </div>
                      <p>Total: ${cart.cartTotal.toFixed(2)}</p>
                    </div>
                    <Link to="/CheckoutSuccessPage" className="btn-cart">Checkout</Link>
                  </div>
                </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </main>
    );
  }
  
  export default CheckoutPage;
  
