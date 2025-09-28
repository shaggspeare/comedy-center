import React from 'react';

interface SeparatorTwoProps {
  className?: string;
}

const SeparatorTwo: React.FC<SeparatorTwoProps> = ({ className }) => {
  return (
    <div className="container">
      <div className={`separator2  ${className}`}></div>
    </div>
  );
};

export default SeparatorTwo;
