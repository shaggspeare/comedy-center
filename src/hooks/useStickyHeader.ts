'use client';
import { useEffect } from 'react';

const useStickyHeader = (pathName: string): void => {
  useEffect(() => {
    const dropdown_item = document.querySelectorAll(
      '.dropdown-item'
    ) as NodeListOf<HTMLAnchorElement>;
    const nav_link = document.querySelectorAll(
      '.nav-link'
    ) as NodeListOf<HTMLAnchorElement>;
    const dropdown_toggle = document.querySelectorAll(
      '.dropdown-toggle'
    ) as NodeListOf<HTMLElement>;

    // remove bootstrap default dropdown clikable behavior in dropdown menu
    dropdown_toggle.forEach((e) => {
      e.addEventListener('click', () => {
        return null;
      });
    });

    // add active main menu when her dropdown menu active
    dropdown_item.forEach((e) => {
      let url = new URL(e.href);
      let urlPathname = url.pathname;

      if (urlPathname === pathName) {
        const parentElement = e.parentNode?.parentNode as HTMLElement | null;
        const previousSibling =
          parentElement?.previousSibling as HTMLElement | null;
        if (previousSibling) {
          previousSibling.classList.add('active');
        }
      }
    });

    // active manin menu
    nav_link.forEach((e) => {
      let url = new URL(e.href);
      let urlPathname = url.pathname;
      if (urlPathname === pathName) {
        e.classList.add('active');
      }
    });

    const isSticky = (): void => {
      const header = document.querySelector(
        '.header-section'
      ) as HTMLElement | null;
      const scrollTop = window.scrollY;
      if (header) {
        if (scrollTop >= 50) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      }
    };

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [pathName]);
};

export default useStickyHeader;
