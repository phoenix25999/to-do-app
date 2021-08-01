import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './store/reducer';

const rootReducer = combineReducers({
  taskReducer: reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
