import React from 'react';
import { LayoutGrid } from 'lucide-react';

const Logo = () => {
  return (
    <div className="w-20 h-20 relative">
      <div className="absolute inset-0 bg-yellow-500 rotate-45"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <LayoutGrid className="w-10 h-10 text-white" />
      </div>
    </div>
  );
};

export default Logo;