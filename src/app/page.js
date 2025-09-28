'use client';
import { useEffect } from 'react';
import Navbar from '@/components/preview/Navbar';
import Banner from '@/components/preview/Banner';
import Technologies from '@/components/preview/Technologies';
import Features from '@/components/preview/Features';
import Demos from '@/components/preview/demos/Demos';
import InnerPages from '@/components/preview/InnerPages';
import Loading from '@/components/preview/Loading';
import Pricing from '@/components/preview/Pricing';
import Footer from '@/components/preview/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init();
    document.body.classList.add('eventiva-landing');
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="main"
        data-bs-spy="scroll"
        data-bs-target="#navContentmenu"
        data-bs-root-margin="0px 0px -50%"
        data-bs-smooth-scroll="true"
      >
        <div id="colorMode" className="theme-switcher d-none">
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="checkbox-label">
            <span className="moon-icon" data-bs-theme-value="dark">
              <svg width="26" height="25">
                <use xlinkHref="#moon-icon"></use>
              </svg>
            </span>
            <span className="sun-icon" data-bs-theme-value="light">
              <svg width="24" height="24">
                <use xlinkHref="#sun-icon"></use>
              </svg>
            </span>
            <span className="ball"></span>
          </label>
        </div>
        <Banner />
        <Technologies />
        <Features />
        <Demos />
        <InnerPages />
        <Loading />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
