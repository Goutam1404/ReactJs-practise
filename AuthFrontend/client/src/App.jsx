import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthForm from "./components/AuthForm.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import Home from "./pages/Home.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import EmailVerify from "./pages/EmailVerify.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Layout from "./Layout.jsx";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
};

const Dashboard = () => {
  const { user, logout, loading } = useAuth();
  // console.log(user.user.username);
  console.log(user.name);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center  p-4">
      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
          <h1 className="font-bold text-3xl text-gray-400">
            Welcome, {user?.name}!
          </h1>
          <p className="text-gray-400">
            This is a highly classified dashboard.
          </p>
          <button
            onClick={logout}
            className="bg-blue-700 hover:bg-blue-800 text-neutral-200 px-4 py-2 rounded-2xl m-5 cursor-pointer"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/register"
          element={
            <div className="">
              <AuthForm />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <AuthForm isLogin={true} />
            </div>
          }
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/email-verify" element={<EmailVerify />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
