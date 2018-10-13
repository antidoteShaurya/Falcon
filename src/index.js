import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const store = createStore(reducer);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
