import Navbar from '../components/Navbar';

const containerStyle: React.CSSProperties = {
  maxWidth: "700px",
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
  marginBottom: "0.5rem",
};

const warningStyle: React.CSSProperties = {
  color: "#b91c1c",
  fontWeight: 500,
  marginBottom: "1.5rem",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#dc2626",
  color: "#fff",
  fontSize: "14px",
  cursor: "pointer",
  transition: "0.2s ease",
};

const Settings = () => {
  return (
    <>
      <Navbar />

      <div style={containerStyle}>
        <h2 style={titleStyle}>Settings</h2>

        <div style={cardStyle}>
          <p style={warningStyle}>
            Only Admins can see this page.
          </p>

          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#b91c1c")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#dc2626")
            }
          >
            Delete All Data
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
