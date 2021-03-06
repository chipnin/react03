import React from 'react';
import { connect } from 'react-redux';
import { changeUsername } from '../actions/index';

class ProfileInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: this.props.username,
		};

		this.handleChange = this.handleChange.bind(this);
		this.submitChangeUsername = this.submitChangeUsername.bind(this);
	}

    render() {
    	const { dispatch } = this.props;
    	const username = this.state.username;

        return (
        	<div class="profile-info">
            	<h1>Profile Info</h1>

            	<input type="text" value={username} onChange={this.handleChange} />
            	<button onClick={this.submitChangeUsername(dispatch)}>Change username</button>
            </div>
        )
    }

    handleChange(event) {
    	this.setState({ username: event.target.value });
    }

    submitChangeUsername(dispatch) {
    	return (event) => {
    		dispatch(changeUsername(this.state.username));
    	}
    }
}

// export default ProfileInfo;
export default connect(state => ({
        username: state.user.username
    })
)(ProfileInfo);