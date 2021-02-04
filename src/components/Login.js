import React from 'react';

const Login = (props) => {
  const { 
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError
  } = props;

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="userEmail">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="userEmail"
                placeholder="E-mail"
                className="form-control"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <p>{emailError}</p>
            </div>
            <div className="form-group">
              <label htmlFor="userPassword">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="userPassword"
                placeholder="Password"
                className="form-control"
                autoComplete="new-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
                <p>{passwordError}</p>
              <small className="form-text text-muted">
                At least 6 characters
              </small>
            </div>
            <button type="submit" className="btn custom-button mt-3">
              Login
            </button>
          </form>
    </div>
  );
};

export default Login;
