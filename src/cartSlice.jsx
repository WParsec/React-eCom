import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    cartTotal: 0,
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const {id, title, discountedPrice, imageUrl, description, rating } = action.payload;
            console.log(action.payload);
            const existingProduct = state.products.find((product) => product.id === id);
            // Creates new object with the same properties as the old state object and adds the new property cartTotal
            state = {
                ...state,
                cartTotal: state.cartTotal + discountedPrice,
            };
            if (existingProduct) {
                existingProduct.quantity++;
                return;
            }
            else {
                state.products.push({
                    id,
                    title,
                    discountedPrice,
                    quantity: 1,
                    imageUrl,
                    description,
                    rating,
                });
            }
        },
        removeFromCart: (state, action) => {
            const {id, discountedPrice} = action.payload;
            const existingProduct = state.products.find((product) => product.id === id);
            if (existingProduct) {
                existingProduct.quantity--;
                state = {
                    ...state,
                    cartTotal: state.cartTotal - discountedPrice,
                }
                if (existingProduct.quantity === 0) {
                    state.products = state.products.filter((product) => product.id !== id);
                } else {
                    return;
                }
            }
        }
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;