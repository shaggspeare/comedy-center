import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

interface HighlightCardOneProps {
  img: string | StaticImageData;
  title: string;
  className?: string;
}

const HighlightCardOne: React.FC<HighlightCardOneProps> = ({
  img,
  title,
  className,
}) => {
  return (
    <div>
      <div
        className={`highlights-item position-relative d-flex flex-column gap-20 px-30 py-40 px-xl-40 py-xl-60 ${className || ''}`}
      >
        <div className="highlights-icon">
          <Image src={img} alt="img" />
        </div>
        <h2 className="fw-extra-bold mb-0">{title}</h2>
      </div>
    </div>
  );
};

export default HighlightCardOne;
