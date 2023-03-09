import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useAPI from "../hooks/useAPI";

// Import styles
import "../scss/main.scss";
import styles from "./Product.module.scss";

export function Product() {
    let { id } = useParams();
    let url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
    const [product, isLoading, isError] = useAPI(url, {});
    const { title, description, price, discountedPrice, imageUrl, rating, reviews} = product;

    
    
    let discount;

    if (discountedPrice < price) {
        discount = price - discountedPrice;
        const discountPercentage = Math.round(discount / price * 100);
    }


    return (
        <main>
            <section className={styles.section}>
                <div className={`container`}>
                    <Link to="/">Back</Link>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className={styles.flex_wrap}>
                        <div className={styles.image_wrap}>
                            <img src={imageUrl} alt={title} />
                        </div>
                        <div className={styles.info_wrap}>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <div className={styles.price_wrap}>
                                {discount ? <p>Before: {price}</p> : ""}
                                <p className={styles.discount_price}>Now: <span>{discountedPrice}</span></p>
                            </div>
                            <div className={styles.rating_wrap}>
                                {rating ? <p>Rating: {rating}</p> : ""}
                            </div>
                            <div className={styles.btn_wrap}>
                                <Link to={`/cart/${id}`} className="btn-cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                    <section>
                        <h2 className={styles.section_h2}>Reviews</h2>
                        {reviews && reviews.length > 0 ? (
                            <div className={styles.reviews_container}>
                                <div className={styles.reviews_wrap}>
                                    {reviews.map((review) => {
                                        return (
                                            <div className={styles.review_card} key={review.id}>
                                                <p>{review.username}</p>
                                                <p>{review.description}</p>
                                                <p>Rating: {review.rating}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <p className={styles.no_reviews}>No reviews yet</p>
                        )}
                    </section>
                </div>
            </section>
        </main>
    )
}

export default Product;