import React from 'react';

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
          {hasAccount ? (
            <>
              <button onSubmit={handleLogin} type="submit">Login</button>
              <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
            </>
          ) : (
            <>
              <button onSubmit={handleSignup} type="submit">Sign Up</button>
              <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
            </>
          )}
        </div>
        
      </form>
    </div>
  );
};

export default Login;
