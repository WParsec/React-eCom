import React, { useState, useEffect } from "react";
import useAPI from "../../hooks/useAPI";
import ProductCard from "../ProductCard/ProductCard";

// Import styles
import "../../scss/main.scss"
import styles from "./Products.module.scss";
import { Link } from "react-router-dom";

// Url
const url = "https://api.noroff.dev/api/v1/online-shop";

export function Products() {
    const [products, isLoading, isError] = useAPI(url, []);
    const [searchQuery, setSearchQuery] = useState("");
    const [autocompleteSuggestion, setAutocompleteSuggestion] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Set filtered products to all products on when products is loaded
    useEffect(() => {
        setFilteredProducts(products);
      }, [products]);
    
        // Create suggestion array and filter products array from search query
      const handleSearch = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
    
        const suggestions = products.filter((product) => {
          return product.title.toLowerCase().includes(value.toLowerCase());
        });
        setAutocompleteSuggestion(suggestions);
    
        const filtered = products.filter((product) => {
          return product.title.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredProducts(filtered);
      };

    // Set search query to suggestion when suggestion is clicked
    const handleSuggestionClick = (event) => {
        const value = event.target.innerText;
        setSearchQuery(value);
    };

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


    return (
        <section className={styles.product_section}>
            <div className="container">
                <div className={styles.search_wrap}>
                    <form action="">
                        <input 
                        onSubmit={(event) => event.preventDefault()}
                        className="search" 
                        type="text" 
                        placeholder="Search products" 
                        value={searchQuery}
                        onChange={handleSearch} />
                    </form>
                    <div className={styles.autocomplete}>
                        {searchQuery ? autocompleteSuggestion.map((suggestion) => {
                            return (
                                <Link to={`/product/${suggestion.id}`} onFocus={handleSuggestionClick} className={styles.autocomplete_item} key={suggestion.id}>
                                    <p>{suggestion.title}</p>
                                </Link>
                            );
                        }) : ""
                        }
                    </div>
                </div>
                <div className={styles.product_grid}>
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Something went wrong...</p>}

                    {filteredProducts.length > 0 ? filteredProducts.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        ); 
                    }) : <div className={styles.no_results}>
                            <p>What does your tinder and the search results have in common?</p>
                            <p>No matches!</p>
                        </div>}
                </div>
            </div>
        </section>
    );
}

export default Products;