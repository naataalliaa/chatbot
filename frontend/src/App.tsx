// import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Bot from './components/Bot/Bot';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import CustomizeBot from './components/CustomizeBot/CustomizeBot';
import { BotProvider } from './components/BotContext/BotContext'; 

function App() {
  return (
    <BotProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Bot />} />
          <Route path="/customize-bot" element={<CustomizeBot />} />
        </Routes>
        <Footer />

    </BotProvider>
  );
}

export default App;
