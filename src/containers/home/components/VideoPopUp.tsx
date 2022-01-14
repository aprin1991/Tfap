import React from "react";
type IProps = {
  path: string;
  show: boolean;
  onClose: Function;
};
const VideoPopUp: React.FC<IProps> = ({ path, show, onClose }) => {
  return (
    <div
      className={`video-popup fixed w-screen h-screen top-0 right-0 bg-black bg-opacity-70 flex justify-center items-center ${
        show ? "active" : ""
      }`}
    >
      <div
        className="absolute right-0 top-0 w-full h-full z-10"
        onClick={() => onClose()}
      />
      <div className="max-w-2xl z-50 relative">
        <div className="flex justify-end w-full">
          <span
            className="cursor-pointer text-white text-2xl mb-2 text-right"
            onClick={() => onClose()}
          >
            ×
          </span>
        </div>
        <video width="320" height="240" controls>
          <source src={path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <style jsx>
        {`
          .video-popup.active {
            opacity: 1;
            pointer-events: auto;
          }
          .video-popup {
            transition: all ease 0.4s;
            opacity: 0;
            pointer-events: none;
            z-index: 6001;
          }
          video {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default VideoPopUp;
