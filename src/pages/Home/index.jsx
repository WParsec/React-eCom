import React from "react";

// Import components
import Hero from "../../components/Hero";
import Products from "../../components/Products";

// Global styles
import '../../scss/main.scss'

export function Home() {
    return (
       <main>
            <Hero />
            <Products />
       </main>
    );
}

export default Home;