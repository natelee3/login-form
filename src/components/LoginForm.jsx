import React from 'react';
import LoginMessage from './LoginMessage';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            serverResponse: null,
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this._submitForm}>
                    <label>
                        username:
                        <input 
                            type="text"
                            value={this.state.username} 
                            onChange={(e) => {
                                this._updateField('username', e.target.value)
                            }}
                        />
                    </label>
                    <br />
                    <label>
                        password:
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={(e) => {
                                this._updateField('password', e.target.value)
                            }}
                        />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
                <LoginMessage 
                    {...this.state.serverResponse}
                />
            </div>
        );
    }

    _submitForm = (e) => {
        e.preventDefault();
        const serverResponse = this.props.handleSubmit(this.state.username, this.state.password);
        this.setState({
            serverResponse
        }, () => {
            console.log(serverResponse);
        });
    }

    _updateField = (field, value) => {
        this.setState({
            [field]: value,
            serverResponse: null
        })
    }
}

export default LoginForm;