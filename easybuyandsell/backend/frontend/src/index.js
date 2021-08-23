import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'

axios.defaults.baseURL="https://easybuyandsell.herokuapp.com"

ReactDOM.render(<App />, document.getElementById('root'));

