import React from 'react';
import Background from './components/Layout/Background';
import Navbar from './components/Layout/Navbar';
import HeroStats from './components/Game/HeroStats'; 
import Inventory from './components/Game/Inventory';
import QuestLog from './components/Game/QuestLog';
import ContactTerminal from './components/Game/ContactTerminal';
import Projects from './components/Game/Projects';

function App() {
  return (
    <div className="relative min-h-screen text-slate-100 font-mono">
      {/* The Background stays fixed and behind everything */}
      <Background />

      {/* All content must have a higher Z-index */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroStats />
          <Inventory />
          <Projects />
          <QuestLog />
          <ContactTerminal/>
        </main>
      </div>
    </div>
  );
}

export default App;