import React from 'react';
import { connect } from 'react-redux';

class ProfileInfo extends React.Component {
	constructor(props) {
		super(props);
	}

    render() {
    	const { username, dispatch } = this.props;

        return (
        	<div>
            	<h1>Profile Info</h1>

            	<input value={username} type='text' />
            	<button>Change username</button>
            </div>
        )
    }
}

// export default ProfileInfo;
export default connect(state => ({
        username: state.user.username
    })
)(ProfileInfo);