import React from 'react';

import ChevronLeft from './ChevronLeft';
import ChevronRght from './ChevronRght';

interface SwiperIconProps {
  prevRef: React.RefObject<HTMLDivElement>;
  nextRef: React.RefObject<HTMLDivElement>;
}

const SwiperIcon: React.FC<SwiperIconProps> = ({ prevRef, nextRef }) => {
  return (
    <div className="swiper-button-progress">
      <div className="swiper-button-next" ref={nextRef}>
        <ChevronRght />
      </div>
      <div className="swiper-button-prev" ref={prevRef}>
        <ChevronLeft />
      </div>
    </div>
  );
};

export default SwiperIcon;
