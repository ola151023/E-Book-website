import React, { useState } from 'react';
import { TextField, Button, Container, CircularProgress } from '@mui/material';
import axios from 'axios';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'http://localhost:8000/api/auth/login',
         { email, password }
        );
        // Assuming your backend returns some data upon successful login
      localStorage.setItem('access_token', JSON.stringify(response.data.data.access_token))
  // Redirect to dashboard or another page upon successful login
      navigation.navigate('books')
    
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          aria-label="Email"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Password"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
        </Button>
      </form>
    </Container>
  );
};

// Mock login function (replace with actual login logic)
const login = async (email, password) => {
  // Simulate a delay (e.g., API request) for 1.5 seconds
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Check credentials (replace with actual authentication logic)
  if (email === 'user@example.com' && password === 'password') {
    return;
  } else {
    throw new Error('Invalid credentials');
  }
};

export default LogIn;
