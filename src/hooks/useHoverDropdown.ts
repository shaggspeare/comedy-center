'use client';
import { useEffect, useState } from 'react';

const useHoverDropdown = (): [
  boolean | undefined,
  React.Dispatch<React.SetStateAction<boolean | undefined>>,
] => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean | undefined>();

  useEffect(() => {}, []);

  return [isDropdownOpen, setDropdownOpen];
};

export default useHoverDropdown;
