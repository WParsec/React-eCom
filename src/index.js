import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);