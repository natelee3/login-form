import React from 'react';

class LoginMessage extends React.Component {
    render() {
        const { message, isValid } = this.props
        
        if (message) {
            return (
                <h1 className={ isValid ? 
             'success' : 'error'}>{message}</h1>
            )
        } else {
            return null;
        }
    }

}

export default LoginMessage;