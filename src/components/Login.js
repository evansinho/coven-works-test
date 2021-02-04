import React from 'react';
// import { Button } from '@material-ui/core';
// import { FormControl } from '@material-ui/core';

const Login = (props) => {
  const { 
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    emailError,
    passwordError,
    hasAccount,
    setHasAccount,
  } = props;

  return (
    <div className="login-page">
      <form>
        <div className="form-group">
          <label htmlFor="Email"> Email </label>
          <input
            type="email"
            name="email"
            className="form-control"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <p>{emailError}</p>
        </div>
        <div className="form-group">
          <label htmlFor="Password"> Password </label>
          <input
            type="password"
            name="password"
            className="form-control"
            autoComplete="new-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <p>{passwordError}</p>
        </div>
        <div>
          {/* {hasAccount ? (
            <>
              <button color="primary" onSubmit={handleLogin} type="submit">Login</button>
              <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
            </>
          ) : (
            <>
              <button color="primary" onSubmit={handleSignup} type="submit">Sign Up</button>
              <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
            </>
          )} */}
          <button color="primary" onSubmit={handleLogin} type="submit">Login</button>
        </div>
        
      </form>
    </div>
  );
};

export default Login;
