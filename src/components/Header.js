import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { username, dispatch } = this.props;
        return (
            <div class="header">
                <h1>
	                Hello {username}
                </h1>
                <nav>
                	<ul class="main-menu">
                		<li class="main-menu__item">
	                		<Link to="/">Home Page</Link>
	                	</li>
                		<li class="main-menu__item">
                			<Link to="/profile">Profile</Link>
						</li>                			
                	</ul>
                </nav>
            </div>
        )
    }
}

// Higher order function - currying
// Return HOC - Higher order component
export default connect(state => ({
        username: state.user.username
    })
)(Header)