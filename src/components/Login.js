import React from 'react';
import { TextField, Button, Card, Typography } from '@material-ui/core';

const Login = (props) => {
  const { 
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError,
  } = props;

  return (
    <div 
      className="login-page"
      style={{
        textAlign: 'center',
      }}
      >
      <Typography 
        color="primary" 
        variant="h3"
        style={{
          margin: '3rem'
        }}
      >
        AIRPORT
      </Typography>
      <Card 
      style={{
        display: 'inline-block',
        padding: '30px',
        textAlign: 'center',
      }}
      >
      <form onSubmit={handleLogin}>
        <TextField
          id="standard-basic" 
          label="Email"
          type="email"
          name="email"
          className="form-control"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <p>{emailError}</p>
        <TextField
          id="standard-basic" 
          label="Password"
          type="password"
          name="password"
          className="form-control"
          autoComplete="new-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <p>{passwordError}</p>
        <Button variant="contained" color="primary" type="submit">Login</Button>
      </form>
    </Card>
    </div>
  );
};

export default Login;
