import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Google login failed');
    }
  };

  return (
    <div className="login-container">
      <header className="navbar">
        <div className="logo-section">
          <img src="/logo192.png" alt="Logo" className="logo" />
          <h1 className="logo-text">📘 Study Portal</h1>
        </div>
        <nav className="nav-links">

        </nav>
      </header>

      <main className="login-box">
        <h2>Student Portal Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <label >Email</label>
          <input
            type="email"
            placeholder="student@example.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn-login">Login</button>
        </form>

        <div className="divider"><span>or</span></div>

        <button className="btn-google" onClick={handleGoogleLogin}>
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" />
          Sign in with Google
        </button>

        <p className="signup-hint">
          Don’t have an account? Use Google to Sign Up.
        </p>
      </main>
    </div>
  );
};

export default Login;
