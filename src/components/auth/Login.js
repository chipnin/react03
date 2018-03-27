import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends React.component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <input type="text" placeHolder="Email" />
                <input type="password" placeHolder="Password" />
            </div>
        )
    }
}