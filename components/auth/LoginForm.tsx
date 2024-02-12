// LoginForm.tsx

import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    
    if (!rollNumber || !password) {
      console.error('Please enter both roll number and password.');
      return;
    }

    try {
     
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rollNumber,
          password,
        }),
      });

      if (response.ok) {
        console.log('Login successful!');
        
      } else {
        console.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div>
      <label>
        Roll Number:
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
