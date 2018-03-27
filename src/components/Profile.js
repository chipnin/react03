import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import ProfileInfo from './ProfileInfo';
import ProfilePassword from './ProfilePassword';

class Profile extends React.Component {
    render() {
        return (
        	<div>
	            <h1>Profile</h1>
	            <div>
	            	<Link to="/profile/info">Info</Link>
	            	<Link to="/profile/password">Password</Link>
	            </div>
            	<Route exact path="/profile/info" component={ProfileInfo} />
    			<Route exact path="/profile/password" component={ProfilePassword} />
	            <Redirect to="/profile/info" />
            </div>
        )
    }
}

export default Profile;