import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  if (!user) return null;

  return (
    <nav
      style={{
        display: "flex",
        gap: "2rem",
        padding: "2rem",
        borderBottom: "1px solid #ccc",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <span>
        <b>{user.username}</b> - {user.role}
      </span>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>

      {user.role === "Admin" && <Link to="/settings">Settings</Link>}

      <button onClick={handleLogout} style={{ marginLeft: "auto", width: '11rem', marginBottom: '3rem', padding: '1.2rem', marginTop: '1rem' }}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;