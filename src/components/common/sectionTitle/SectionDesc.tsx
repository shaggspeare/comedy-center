import React from 'react';

interface SectionDescProps {
  desc: string;
  className?: string;
}

const SectionDesc: React.FC<SectionDescProps> = ({ desc, className }) => {
  return <p className={`mb-0 ${className}`}>{desc}</p>;
};

export default SectionDesc;
