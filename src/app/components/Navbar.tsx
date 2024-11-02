// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { Button } from '@mui/material';

interface NavbarProps {
  activeTab: string;  
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-gray-800 p-4 shadow fixed w-full z-10">
      <ul className="flex justify-end space-x-4">
        <li>
          <Link href="/" passHref>
            <div className={`relative ${activeTab === 'home' ? 'border-b-2 border-red-500' : ''}`}>
              <Button variant="text" className="text-white" onClick={() => setActiveTab('home')}>
                Home
              </Button>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/skills" passHref>
            <div className={`relative ${activeTab === 'skills' ? 'border-b-2 border-red-500' : ''}`}>
              <Button variant="text" className="text-white" onClick={() => setActiveTab('skills')}>
                Skills
              </Button>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <div className={`relative ${activeTab === 'contact' ? 'border-b-2 border-red-500' : ''}`}>
              <Button variant="text" className="text-white" onClick={() => setActiveTab('contact')}>
                Contact
              </Button>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <div className={`relative ${activeTab === 'about' ? 'border-b-2 border-red-500' : ''}`}>
              <Button variant="text" className="text-white" onClick={() => setActiveTab('about')}>
                About
              </Button>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
