import React from 'react';
import { connect } from 'react-redux';

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
        	<div>
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

// action creator
const changeUsername = (name) => ({
    type: 'CHANGE_USERNAME',
    payload: name
})

// export default ProfileInfo;
export default connect(state => ({
        username: state.user.username
    })
)(ProfileInfo);