import React from "react";
import { useParams } from "react-router-dom";

export function Product() {
    let { id } = useParams();
    console.log(id)

    return (
        <main>
            <h1>{id}</h1>
        </main>
    )
}

export default Product;