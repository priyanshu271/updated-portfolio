// src/components/Content.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import HomePage from '../page'; 
import SkillsPage from '../skills/page';
import ContactPage from '../contact/page';
import AboutPage from '../about/page';

const Content: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
        case 'about':
            return <AboutPage/>
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Content;
