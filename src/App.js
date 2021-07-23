import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        nate: {
          password: 'password'
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <LoginForm handleSubmit={this._checkCredentials}/>
      </div>
    )
  }

  _checkCredentials = (username, password) => {
    //Compare arguments to this.state.credentials
    const userObj = this.state.credentials[username];
    if (userObj && (userObj.password === password)) {
      return {
        isValid: true,
        message: 'Login successful'
      };
    } else {
      return {
        isValid: false,
        message: 'Bad username or password'
      };
    }
  }
}
export default App;
