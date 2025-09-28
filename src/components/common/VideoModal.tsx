import React from 'react';
import ModalVideo from 'react-modal-video';
import '/node_modules/react-modal-video/scss/modal-video.scss';

interface VideoModalProps {
  videoId: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  videoId,
  isOpen,
  setOpen,
}) => {
  return (
    <ModalVideo
      channel="youtube"
      youtube={{ mute: 0, autoplay: 0 }}
      isOpen={isOpen}
      videoId={videoId}
      onClose={() => setOpen(false)}
    />
  );
};

export default VideoModal;
