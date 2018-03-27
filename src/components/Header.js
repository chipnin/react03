import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { username, dispatch } = this.props;
        const { time } = this.props;
        return (
            <div>
                <h1>
	                Hello {username}
	                <br/>
	                Time {time}
                </h1>
                <button onClick={this._changeUsername(dispatch)}>Change username</button>
                <nav>
                	<ul>
                		<li>
	                		<Link to="/">Home Page</Link>
	                	</li>
                		<li>
                			<Link to="/profile">Profile</Link>
						</li>                			
                	</ul>
                </nav>
            </div>
        )
    }

    _changeUsername(dispatch) {
        return (event) => {
            dispatch(changeUsername('Baby'));
        }
    }
}
// action creator
const changeUsername = (name) => ({
    type: 'CHANGE_USERNAME',
    payload: name
})

// Higher order function - currying
// Return HOC - Higher order component
export default connect(state => ({
        username: state.user.username
    })
)(Header)