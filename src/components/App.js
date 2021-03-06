import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import Profile from './Profile';

class App extends React.Component {
    render() {
        return (
        	<div class="container">
	            <BrowserRouter>
        			<div>
        				<Header />
                        <div class="main-content">
                			<Route exact path="/" component={HomePage} />
                			<Route path="/profile" component={Profile} />
                        </div>
	            	</div>
	            </BrowserRouter>
            </div>
        )
    }
}

export default App;