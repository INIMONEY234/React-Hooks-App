// Home.tsx
import { useAuth } from './context/useAuth';

function Home() {
  const { user, login, logout } = useAuth(); //  Works perfectly now!

  return (
    <div>
      {user ? (
        <button onClick={logout}>Log Out {user.username}</button>
      ) : (
        <button onClick={() => login('Alice', 'Admin')}>Log In</button>
      )}
    </div>
  );
}

export default Home;