import React, { useState, Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
    const { from } = props.location.state || { from: { pathname: '/' } };
    console.log(from);
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const login = () => {
      fakeAuth.authenticate(() => {
        setRedirectToReferrer(true);
      });
    };

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }
}

export default Login;

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};
