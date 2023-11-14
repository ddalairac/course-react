import React from 'react';
import ReactDOM from 'react-dom/client';
import TheRouter from './TheRouter';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './data/store/store.ts'; // import your store
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // React.StrictMode mounts the components twice, so the browser logs will be duplicated
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={TheRouter} />
    </Provider>
  </React.StrictMode>
);
