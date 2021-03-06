import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GeolocationContextProvider } from './GeolocationContext';
import { store } from './redux/store';

ReactDOM.render(
  <GeolocationContextProvider>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </GeolocationContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
