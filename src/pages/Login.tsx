import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Role } from '../types/User';
import { useAuth } from '../context/useAuth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<Role>('Viewer');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username.trim()) return;

    login(username, role);

    navigate('/dashboard', { replace: true });
  };

  return (
    <div style={{ maxWidth: 600, height: '40%', margin: '4rem auto', padding: '4rem', border: '1px solid #ccc', borderRadius: '2rem', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}> 
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: 'block', width: '8rem', marginBottom: '4rem', padding: '1.2rem', marginTop: '1rem' }}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          style={{ display: 'block', width: '11rem', marginBottom: '4rem', padding: '1.2rem', marginTop: '1rem' }}
        >
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>

        <button type="submit" style={{ width: '11rem', marginBottom: '3rem', padding: '1.2rem', marginTop: '1rem' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;