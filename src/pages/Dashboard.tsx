import Navbar from '../components/Navbar';
import { useAuth } from "../context/useAuth";

const cardStyle: React.CSSProperties = {
  padding: "1.5rem",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  backgroundColor: "#fff",
  marginTop: "1rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
};

const containerStyle: React.CSSProperties = {
  padding: "2rem",
  maxWidth: "900px",
  margin: "2rem auto",
};

const AdminPanel = () => (
  <div style={cardStyle}>
    <h3 style={sectionTitle}>Admin Controls</h3>
    <p>Manage users, delete records, view analytics.</p>
  </div>
);

const EditorPanel = () => (
  <div style={cardStyle}>
    <h3 style={sectionTitle}>Content Editor</h3>
    <p>Edit articles and upload media.</p>
  </div>
);

const ViewerPanel = () => (
  <div style={cardStyle}>
    <h3 style={sectionTitle}>Read-only Reports</h3>
    <p>View charts and export PDFs.</p>
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();

  const renderByRole = () => {
    switch (user?.role) {
      case 'Admin':
        return <AdminPanel />;
      case 'Editor':
        return <EditorPanel />;
      case 'Viewer':
        return <ViewerPanel />;
      default:
        return (
          <div style={cardStyle}>
            <p>No role assigned.</p>
          </div>
        );
    }
  };

  return (
    <>
      <Navbar />

      <div style={containerStyle}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700 }}>
          Dashboard
        </h2>

        {renderByRole()}
      </div>
    </>
  );
};

export default Dashboard;
