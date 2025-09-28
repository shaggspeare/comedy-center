'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import EvModal from './EvModal';

interface GalleryDataItem {
  id: number;
  link: string;
  thumb: StaticImageData | string;
  type: string;
}

interface ImageData {
  thumb: StaticImageData | string;
  [key: string]: any;
}

interface GallerySwiperProps {
  data: GalleryDataItem[];
  galleryData: ImageData[];
  galleryClass?: string;
}

const GallerySwiper: React.FC<GallerySwiperProps> = ({
  data,
  galleryData,
  galleryClass,
}) => {
  const [currentId, setCurrentId] = useState<number>(0);
  const [typeEle, setTypeEle] = useState<string>('video');
  const [url, setUrl] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  // -------- Video and image modal open
  const handleOpenModal = (index: number, type: string, link: string): void => {
    setModalIsOpen(true);
    setCurrentId(index);
    setUrl(link);
    setTypeEle(type.toLowerCase());
  };
  // -------- Video and image modal open

  return (
    <>
      <Swiper
        autoplay={{
          delay: 0,
        }}
        slidesPerView={'auto'}
        speed={6000}
        spaceBetween={30}
        loop={true}
        modules={[Autoplay]}
        className={`swiper  ${galleryClass}`}
      >
        {data.map(({ id, link, thumb, type }) => {
          return (
            <SwiperSlide key={id} className="swiper-slide">
              <div className="gallery-image">
                <div
                  onClick={() => handleOpenModal(id, type, link)}
                  className="video-popup-link hover-area"
                  data-cursor-text={type}
                >
                  <Image src={thumb} alt="img" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Image and video popup modal */}
      {modalIsOpen && (
        <EvModal
          setModalIsOpen={setModalIsOpen}
          currentId={currentId}
          type={typeEle}
          url={url}
          images={galleryData}
        />
      )}
      {/* Image and video popup modal */}
    </>
  );
};

export default GallerySwiper;
