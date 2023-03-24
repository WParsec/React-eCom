import { configureStore } from '@reduxjs/toolkit';

// Redux Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import the reducer from the slice file. It is a default export so we can name it whatever we want.
import cartReducer from './cartSlice';

// Create a persist configuration object
const persistConfig = {
    key: 'root',
    storage,
  };

// Wrap the cartReducer with persistReducer and pass in the persistConfig object
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
    },
});

export const persistor = persistStore(store);