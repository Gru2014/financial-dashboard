import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import { UserProvider } from './contexts/UserContext';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard onMenuClick={handleMenuClick} />} />
              <Route path="/setting" element={<Settings onMenuClick={handleMenuClick} />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}
