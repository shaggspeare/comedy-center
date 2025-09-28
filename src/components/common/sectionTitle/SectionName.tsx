import React from 'react';

interface SectionNameProps {
  name: string;
  className?: string;
}

const SectionName: React.FC<SectionNameProps> = ({ name, className }) => {
  return (
    <span
      className={`fs-3 straight-line-wrapper fw-semibold position-relative ${className}`}
    >
      <span className="straight-line"></span>
      {name}
    </span>
  );
};

export default SectionName;
