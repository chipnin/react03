import './assets/sass/style.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './components/App';
import store from './store/store';

render(
	<Provider store={store}>
    	<App />
    </Provider>,
    document.querySelector('#root'),
    () => console.log('Add App component')
)