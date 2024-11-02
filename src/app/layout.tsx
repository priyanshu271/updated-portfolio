// src/app/page.tsx (or the main component where you're using AnimatePresence)
'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import "./globals.css";
import Footer from './components/Footer';

const Home = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
      </head>
      <body className="bg-gray-900 min-h-screen text-white">
        <div>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          <Content activeTab={activeTab} />
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Home;
