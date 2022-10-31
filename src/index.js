import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersReducer from "./store/userSlice"
import moviesReducer from "./store/movieSlice"
//這個usersReducer是自己命名的，因為export那邊是export default，所以這裡直接import，名字是什麼都可以

const store = configureStore({
  reducer:{
    users: usersReducer,
    movies: moviesReducer
  }
})
//這個reducer的property會包含所有可能會用到的reducer(想像是銀行的行員，有不一樣的工作)
//然後這些reducer會在別的檔案被建立

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
