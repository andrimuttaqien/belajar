import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateLessComponent from './components/StateLessComponent';
import StateFullComponent from './containers/StateFullComponent';
import YouTube from './components/YouTube/YouTube';
import Home from './containers/home/Home';

ReactDOM.render(<Home />,document.getElementById('root'))
// ReactDOM.render(<p>Helo Word With DOM</p>,document.getElementById('root'))
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
