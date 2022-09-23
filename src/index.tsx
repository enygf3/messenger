import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './core/reducers/index';
import App from './App';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <DevSupport
          ComponentPreviews={ComponentPreviews}
          useInitialHook={useInitial}
        >
          <App />
        </DevSupport>
      </Router>
    </Provider>
  </React.StrictMode>
);
