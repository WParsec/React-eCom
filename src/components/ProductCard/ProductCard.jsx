import React from "react";
import { Link } from "react-router-dom";

// Import styles
import styles from "./ProductCard.module.scss";

function ProductCard({ product }) {
    const { id, title, discountedPrice, imageUrl, rating, discount } = product;

    return (
        <Link to={`/product/${id}`} className={styles.product_card}>
                {discount && <div className="discount">{product.discount}%</div>}
                <img src={imageUrl} alt={title} />
                <div className={styles.info_wrap}>
                    <h3>{title}</h3>
                    {rating ? <p>Rating: {rating}</p> : <p>No rating</p>}
                </div>
                <div className={styles.card_bottom}>
                    <p>{discountedPrice},-</p>
                    <button className="btn-primary">See more</button>
                </div>
        </Link>
    );
}

export default ProductCard;