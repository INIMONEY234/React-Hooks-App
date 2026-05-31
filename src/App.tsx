import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import ProtectedRoute from './components/ProtectedRoute'; 

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* You can add a common layout for protected routes here */} 
      {children}
    </>
  )
}

const App = () => {
  return (
    // <div className="App"> 
      <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />


      {/* Protected */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <ProtectedLayout>
            <Dashboard />
          </ProtectedLayout>
        </ProtectedRoute>
      } 
      />

      <Route path="/profile" element={
        <ProtectedRoute>
          <ProtectedLayout>
            <Profile />
          </ProtectedLayout>
        </ProtectedRoute>
      } 
      />

      <Route path="/settings" element={
        <ProtectedRoute allowedRoles="Admin"> 
          <ProtectedLayout>
            <Settings />
          </ProtectedLayout>
        </ProtectedRoute>
      } 
      />

      {/* <Route path="*" element={<NotFound />}/> */}
        </Routes>
      // </div>
  );
};

export default App;