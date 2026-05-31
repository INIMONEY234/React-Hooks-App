import Navbar from '../components/Navbar';
import { useAuth } from "../context/useAuth";

const containerStyle: React.CSSProperties = {
  maxWidth: "600px",
  margin: "2rem auto",
  padding: "2rem",
};

const cardStyle: React.CSSProperties = {
  padding: "1.5rem",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  backgroundColor: "#fff",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.6rem",
  fontWeight: 700,
  marginBottom: "1rem",
};

const labelStyle: React.CSSProperties = {
  fontWeight: 600,
  color: "#374151",
};

const rowStyle: React.CSSProperties = {
  marginBottom: "0.75rem",
  fontSize: "1rem",
};

const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      <div style={containerStyle}>
        <h2 style={titleStyle}>Profile</h2>

        <div style={cardStyle}>
          <div style={rowStyle}>
            <span style={labelStyle}>Username: </span>
            {user?.username || "Not available"}
          </div>

          <div style={rowStyle}>
            <span style={labelStyle}>Role: </span>
            {user?.role || "Not assigned"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
