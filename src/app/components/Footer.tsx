// src/components/Footer.tsx
'use client';

import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-6">
          <Link href="https://www.linkedin.com/in/priyanshu-rai-2029111ba" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            LinkedIn
          </Link>
          <Link href="https://github.com/priyanshu271" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            GitHub
          </Link>
          <Link href="mailto:priyanshurai271@gmail.com" className="hover:text-red-500">
            Email
          </Link>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Priyanshu Rai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
