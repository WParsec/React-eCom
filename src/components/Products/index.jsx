import React, { useState } from "react";
import useAPI from "../../hooks/useAPI";
import ProductCard from "../ProductCard/ProductCard";

// Import styles
import "../../scss/main.scss"
import styles from "./Products.module.scss";

// Url
const url = "https://api.noroff.dev/api/v1/online-shop";

export function Products() {
    const [products, isLoading, isError] = useAPI(url);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    for (let i = 0; i < products.length; i++) {
        if (products[i].rating === null || products[i].rating === 0) {
            products[i].rating = false;
        }

        if (products[i].discountedPrice < products[i].price) {
            const discount = products[i].price - products[i].discountedPrice;
            const discountPercentage = Math.round(discount / products[i].price * 100);
            products[i].discount = discountPercentage;
        }
    }

    console.log(products);

    return (
        <section className={styles.product_section}>
            <div className="container">
                <div className={styles.search_wrap}>
                    <form action="">
                        <input 
                        className="search" 
                        type="text" 
                        placeholder="Search products" 
                        value={searchQuery}
                        onChange={handleSearch} />
                    </form>
                </div>
                <div className={styles.product_grid}>
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Something went wrong...</p>}

                    {filteredProducts.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Products;