import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Drizzle } from "drizzle";
// import { DrizzleProvider } from 'drizzle-react';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store, {drizzleOptions} from './modules/store';

const drizzle = new Drizzle(drizzleOptions, store);


ReactDOM.render(
	<Provider store={store}>
			<App drizzle={drizzle} />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
