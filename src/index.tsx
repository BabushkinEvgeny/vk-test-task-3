import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import { Provider } from 'react-redux';
import { store } from './features/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store = {store}>
  <React.StrictMode>
    <Main />
  </React.StrictMode>
  </Provider>
);
