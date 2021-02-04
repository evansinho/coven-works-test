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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
