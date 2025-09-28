import React from 'react';

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className }) => {
  return (
    <div className="container">
      <div className={`separator  ${className}`}></div>
    </div>
  );
};

export default Separator;
