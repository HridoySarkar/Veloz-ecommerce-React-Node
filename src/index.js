import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
    <App/>
    </RouterProvider>
  </Provider>
);
