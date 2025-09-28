import Link from 'next/link';
import React from 'react';

interface ButtonFillProps {
  children: React.ReactNode;
  link: string;
  className?: string;
}

const ButtonFill: React.FC<ButtonFillProps> = ({
  children,
  link,
  className = '',
}) => {
  return (
    <Link
      href={link}
      className={`btn btn-primary btn-style-2  align-items-center d-inline-flex gap-2 mb-3 mb-md-0 ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonFill;
