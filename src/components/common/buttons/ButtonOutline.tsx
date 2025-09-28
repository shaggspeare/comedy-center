import Link from 'next/link';
import React from 'react';

interface ButtonOutlineProps {
  children: React.ReactNode;
  link: string;
  className?: string;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  link,
  className = '',
  children,
}) => {
  return (
    <Link
      href={link}
      className={`btn  d-inline-flex align-items-center  ${className}`}
      aria-label="buttons"
    >
      {children}
    </Link>
  );
};

export default ButtonOutline;
