import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    // When logging out, redirect to home/dashboard
    if (isLoggedIn) {
      setCurrentPage('dashboard');
    }
  };

  const PageContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
            <p className="text-lg">Welcome to your SaaS dashboard! This is where you can see an overview of your data and activities.</p>
            <p className="mt-4">Feel free to explore other sections using the navigation.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Settings</h2>
            <p className="text-lg">Manage your account settings here. Update your profile, change password, or configure preferences.</p>
          </div>
        );
      case 'profile':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">User Profile</h2>
            <p className="text-lg">View and edit your personal profile information.</p>
          </div>
        );
      default:
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Not Found</h2>
            <p className="text-lg">The page you are looking for does not exist.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold cursor-pointer" onClick={() => setCurrentPage('dashboard')}>MySaaSApp</h1>
          <div className="space-x-6">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`hover:text-purple-200 transition-colors duration-200 text-lg ${currentPage === 'dashboard' ? 'font-bold underline' : ''}`}
            >
              Dashboard
            </button>
            {isLoggedIn && (
              <>
                <button
                  onClick={() => setCurrentPage('settings')}
                  className={`hover:text-purple-200 transition-colors duration-200 text-lg ${currentPage === 'settings' ? 'font-bold underline' : ''}`}
                >
                  Settings
                </button>
                <button
                  onClick={() => setCurrentPage('profile')}
                  className={`hover:text-purple-200 transition-colors duration-200 text-lg ${currentPage === 'profile' ? 'font-bold underline' : ''}`}
                >
                  Profile
                </button>
              </>
            )}
            <button
              onClick={handleLoginToggle}
              className="bg-white text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-purple-100 transition-all duration-200 text-lg font-medium"
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-6 bg-white shadow-xl rounded-lg my-8">
        {isLoggedIn ? (
          <PageContent />
        ) : (
          <div className="text-center p-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Welcome to MySaaSApp!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the power of our cutting-edge solution designed to streamline your workflow.
            </p>
            <button
              onClick={handleLoginToggle}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-2xl font-bold hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              Get Started - Login
            </button>
            <p className="text-gray-500 text-sm mt-8">
              This is a simple demo. For a full SaaS experience, you would integrate backend authentication and data.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center shadow-inner mt-auto">
        <div className="container mx-auto">
          <p className="text-md">&copy; {new Date().getFullYear()} MySaaSApp. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React and Tailwind CSS for simplicity.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;