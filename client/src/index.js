import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './redux';

import App from './App';
import './index.scss';

import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Auth from "./components/Auth/Auth";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);
