import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';

const App = lazy(() => import('./App.js'));

ReactDOM.render(
  <Suspense fallback="<p>Loading...</p>">
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);
