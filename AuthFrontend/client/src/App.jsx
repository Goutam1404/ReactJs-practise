import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;

  return children;
};

const Dashboard = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <h1>Welcome, {user?.email}!</h1>
      <p>This is a highly classified dashboard.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/register"
          element={
            <div className="min-h-screen bg-gray-950">
              <AuthForm />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="min-h-screen bg-gray-950">
              <AuthForm isLogin={true} />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
