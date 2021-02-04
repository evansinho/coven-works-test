/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Login from './Login';
import fire from '../fire';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailErrors] = useState('');
  const [passwordError, setPasswordErrors] = useState('');
  const [user, setUser] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailErrors('');
    setPasswordErrors('');
  }

  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('hello');
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      switch(err.code) {
        case 'auth/invalid-email':
        case 'auth/user-disabled':
        case 'auth/user-not-found':
          setEmailErrors(err.message);
          break;
        case 'auth/wrong-password':
          setPasswordErrors(err.message)
          break;
        default:
      }
    })
  }

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('hello');
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      switch(err.code) {
        case 'auth/Email-already-in-use':
        case 'auth/invalid-email':
          setEmailErrors(err.message);
          break;
        case 'auth/weak-password':
          setPasswordErrors(err.message)
          break;
        default:
      }
    })
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  }

  useEffect(() => {
    authListener();
  }, [])


  return (
    <div className="App">
      {user ? (
        <h1>Hello</h1>
      ) : (
        <Login
          email ={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          emailError={emailError}
          passwordError={passwordError}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
        />
      )}
    </div>
  );
}

export default App;
