import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <div className="pt-16">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;