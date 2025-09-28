import Link from 'next/link';
import React from 'react';

interface ButtonCustomProps {
  children: React.ReactNode;
  link: string;
  className?: string;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
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

export default ButtonCustom;
