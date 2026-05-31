import Navbar from '../components/Navbar';

const Settings = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <h2>Settings</h2>
        <p>Only Admins can see this page.</p>
        <button>Delete All Data</button>
      </div>
    </>
  );
};

export default Settings;