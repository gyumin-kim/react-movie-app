import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// id가 'root'인 element에 App component를 출력한다.
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
