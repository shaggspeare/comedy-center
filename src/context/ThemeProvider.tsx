import { usePathname } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const pathName = usePathname();

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // document.documentElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light")

    // add dark and light mode base on path Name
    if (
      pathName === '/' ||
      pathName === '/home-3/' ||
      pathName === '/home-4/' ||
      pathName === '/home-1/' ||
      pathName === '/home-2/' ||
      pathName === '/home-5/' ||
      pathName === '/home-6/' ||
      pathName === '/home-7/' ||
      pathName === '/home-8/' ||
      pathName === '/venue/' ||
      pathName === '/contact-us/' ||
      pathName === '/about-us/' ||
      pathName === '/blog-single-3/' ||
      pathName === '/event-single/' ||
      pathName === '/login/' ||
      pathName === '/register/' ||
      pathName === '/lost-password/'
    ) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else if (
      pathName === '/blog/' ||
      pathName === '/blog-single-1/' ||
      pathName === '/blog-single-2/'
    ) {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }

    const elementWithClass = document.querySelector('body');
    function firstClassAdd(callback) {
      // by default add eventiva-landing class in bobdy
      elementWithClass.classList.add('eventiva-landing');
      callback();
    }

    function reloadClassAdd() {
      // first find previous body class and remove this calss
      const currentClassName = elementWithClass.className;
      const findClass = currentClassName.split(' ');
      elementWithClass.classList.remove(...findClass);

      // second add class base on route name
      if (pathName === '/') {
        elementWithClass.classList.add('eventiva-landing');
      } else if (pathName === '/documentation/') {
        elementWithClass.classList.add('eventiva-documentation');
      } else if (
        pathName === '/home-1/' ||
        pathName === '/home-2/' ||
        pathName === '/home-5/' ||
        pathName === '/home-7/' ||
        pathName === '/home-8/' ||
        pathName === '/venue/' ||
        pathName === '/contact-us/' ||
        pathName === '/about-us/' ||
        pathName === '/event-single/' ||
        pathName === '/login/' ||
        pathName === '/register/' ||
        pathName === '/lost-password/'
      ) {
        elementWithClass.classList.add('home-1');
      } else if (pathName === '/home-3/' || pathName === '/home-6/') {
        elementWithClass.classList.add('home-6');
      } else if (pathName === '/home-4/') {
        elementWithClass.classList.add('home-7');
      } else if (
        pathName === '/blog/' ||
        pathName === '/blog-single-1/' ||
        pathName === '/blog-single-2/' ||
        pathName === '/blog-single-3/' ||
        pathName === '/event-listing/'
      ) {
        elementWithClass.classList.add('home-7', 'blog');
      }
    }
    firstClassAdd(reloadClassAdd);
    // Hover for card border
    document.querySelectorAll('.blog-content').forEach((e) => {
      e.addEventListener('mouseover', () => {
        if (
          document.querySelector('html').getAttribute('data-bs-theme') ===
          'dark'
        ) {
          e.classList.add('blog-gradient-border');
        } else {
          e.classList.remove('blog-gradient-border');
        }
      });
    });
  }, [pathName]);

  return (
    <ThemeContext.Provider value={{ toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
