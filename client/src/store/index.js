import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { reducerStore } from './reducer';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

export const store = createStore(reducerStore, applyMiddleware(thunk));
