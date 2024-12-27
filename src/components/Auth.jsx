import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css'; // Ensure this CSS file exists and styles the component appropriately.

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
  const navigate = useNavigate();

  useEffect(() => {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    }, {});

    const user = cookies.user ? JSON.parse(cookies.user) : null;
    if (user) {
      setIsLoggedIn(true);
      navigate('/projects'); // Redirect to projects if already logged in
    }
  }, [navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = btoa(e.target.password.value); // Base64 encoding (not secure for production)

    const userData = { name, email, password };
    document.cookie = `user=${JSON.stringify(userData)}; path=/; max-age=${60 * 60 * 24 * 30}`; // Save cookie for 30 days
    alert('Registration successful!');
    setIsRegistering(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = btoa(e.target.password.value); // Base64 encoding

    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    }, {});

    const user = cookies.user ? JSON.parse(cookies.user) : null;

    if (user && user.email === email && user.password === password) {
      alert('Login successful!');
      setIsLoggedIn(true);
      navigate('/projects'); // Redirect after login
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    document.cookie = 'user=; path=/; max-age=0'; // Clear the cookie
    setIsLoggedIn(false);
    alert('Logged out successfully');
    navigate('/'); // Redirect to home
  };

  if (isLoggedIn) {
    return (
      <div className="unique-auth-container">
        <h1 className="unique-auth-heading">Welcome Back!</h1>
        <button className="unique-auth-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="unique-auth-container">
      {isRegistering ? (
        <>
          <h1 className="unique-auth-heading">Register</h1>
          <form className="unique-auth-form" onSubmit={handleRegister}>
            <label className="unique-auth-label">Name:</label>
            <input className="unique-auth-input" type="text" name="name" required placeholder="Enter your name" />
            <label className="unique-auth-label">Email:</label>
            <input className="unique-auth-input" type="email" name="email" required placeholder="Enter your email" />
            <label className="unique-auth-label">Password:</label>
            <input className="unique-auth-input" type="password" name="password" required placeholder="Enter your password" />
            <button className="unique-auth-button" type="submit">Register</button>
          </form>
          <p className="unique-auth-footer">
            Already have an account? <span onClick={() => setIsRegistering(false)}>Login here</span>
          </p>
        </>
      ) : (
        <>
          <h1 className="unique-auth-heading">Login</h1>
          <form className="unique-auth-form" onSubmit={handleLogin}>
            <label className="unique-auth-label">Email:</label>
            <input className="unique-auth-input" type="email" name="email" required placeholder="Enter your email" />
            <label className="unique-auth-label">Password:</label>
            <input className="unique-auth-input" type="password" name="password" required placeholder="Enter your password" />
            <button className="unique-auth-button" type="submit">Login</button>
          </form>
          <p className="unique-auth-footer">
            Don't have an account? <span onClick={() => setIsRegistering(true)}>Register here</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Auth;
