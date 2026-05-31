import Navbar from '../components/Navbar';
import { useAuth } from "../context/useAuth";

const AdminPanel = () => <div><h3>Admin Controls</h3><p>Manage users, delete records, view analytics.</p></div>;
const EditorPanel = () => <div><h3>Content Editor</h3><p>Edit articles and upload media.</p></div>;
const ViewerPanel = () => <div><h3>Read-only Reports</h3><p>View charts and export PDFs.</p></div>;

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
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', margin: '2rem' }}>
        <h2>Dashboard</h2>
        {renderByRole()}
      </div>
    </>
  );
};

export default Dashboard;