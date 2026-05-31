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


  const inputStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    maxWidth: "320px",
    padding: "12px 14px",
    margin: "12px 0",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "320px",
    padding: "12px 14px",
    marginTop: "16px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  };

  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: '4rem auto',
        padding: '4rem',
        border: '1px solid #ccc',
        borderRadius: '2rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h2>Login</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
          style={inputStyle}
        >
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>

        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
