import Navbar from '../components/Navbar';
import { useAuth } from "../context/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <h2>Profile</h2>
        <p><b>Username:</b> {user?.username}</p>
        <p><b>Role:</b> {user?.role}</p>
      </div>
    </>
  );
};

export default Profile;