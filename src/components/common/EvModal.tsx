import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

interface ImageData {
  thumb: StaticImageData | string;
  [key: string]: any;
}

interface EvModalProps {
  setModalIsOpen: (isOpen: boolean) => void;
  url: string;
  type: string;
  currentId: number;
  images: ImageData[];
}

const EvModal: React.FC<EvModalProps> = ({
  setModalIsOpen,
  url,
  type,
  currentId,
  images,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(
    currentId - 1
  );

  const nextImage = (): void => {
    if (type === 'image') {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevImage = (): void => {
    if (type === 'image') {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  // Close modal event
  const closeEvModal = (): void => {
    setModalIsOpen(false);
  };

  return (
    <div className="ev-modal">
      <div className="ev-modal-container">
        <button className="ev-close-btn" onClick={closeEvModal}>
          <i>
            <IoMdClose />
          </i>
        </button>
        {type === 'video' ? (
          <div className="">
            <iframe
              className="iframe"
              src={url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="ev-modal-img">
            <Image
              src={images[currentImageIndex]?.thumb}
              alt={`Image ${currentImageIndex + 1}`}
              width={0}
              height={0}
              style={{ width: 'auto', height: 'auto' }}
            />
            <p className="ev-counter">
              {currentImageIndex} of {images?.length}
            </p>
          </div>
        )}
      </div>
      {type === 'image' && (
        <div className="ev-action-btn">
          <button className="ev-prev-button " onClick={prevImage}>
            <AiFillCaretLeft />
          </button>
          <button className="ev-next-button" onClick={nextImage}>
            <AiFillCaretRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default EvModal;
