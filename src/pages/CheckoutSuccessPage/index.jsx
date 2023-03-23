import React from 'react'
import { Link } from 'react-router-dom'

// Redux
import { clearCart } from "../../cartSlice";
import { useDispatch } from "react-redux";

// Components
import BackButton from '../../components/BackButton'

// Import styles
import styles from './CheckoutSuccessPage.module.scss'

function CheckoutSuccessPage() {
  const dispatch = useDispatch();

  // Function that clears the cart on load of the page
  React.useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);
  return (
    <main>
        <section className="border-bottom">
          <div className={`container`}>
            <BackButton />
          </div>
        </section>
        <section>
          <div className="container">
            <div className={styles.content_wrap}>
              <h1 className={styles.heading}>Checkout success</h1>
              <p>Your order has been placed.</p>
              <Link to="/" className='btn-cart'>Continue shopping</Link>
            </div>
          </div>
        </section>
    </main>
  )
}

export default CheckoutSuccessPage;
