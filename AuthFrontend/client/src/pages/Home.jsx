import React from 'react'
import NavBar from '../components/NavBar';
import { useAuth } from '../context/AuthContext';

function Home() {
   const { user, logout, loading } = useAuth();
    // console.log(user.user.username);
    console.log(user.name);
    
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
        {loading ? (
          <p>Loading....</p>
        ) : (
          <>
          <NavBar/>
            <h1 className="font-bold text-3xl text-gray-400">
              Hey, {user?.name}!
            </h1>
            <p className="text-gray-400">
              This is a highly classified dashboard.
            </p>
           
          </>
        )}
      </div>
    );
}

export default Home