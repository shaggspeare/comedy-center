import Image from 'next/image';
import React from 'react';

import EventDate from '@/components/common/EventDate';
import EventCountDown from '../common/EventCountDown';

const BannerEventSingle: React.FC = () => {
  return (
    <section className="hero-section position-relative event-single-hero max-width">
      <div className="hero-wrapper mx-auto position-relative parallax">
        <div className="container">
          <div className="hero-8-inner">
            <h1 className="hero-heading-text fs-100 text-white text-uppercase custom-poppins mb-3 mb-xxl-20">
              Astral Beats on the Main Stage
            </h1>
            <EventCountDown styleNum={0} />
          </div>
          {/* <!-- hero-inner-text --> */}
        </div>
        {/* <!-- container --> */}

        <EventDate styleNum={0} />
        {/* <!-- event-info --> */}
      </div>
    </section>
  );
};

export default BannerEventSingle;
