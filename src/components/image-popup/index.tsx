import React from "react";
import { IProps } from "./types";

const ImagePopUp: React.FC<IProps> = ({ src = "", show, onClose }) => {
  return (
    <div
      className={`img-popup fixed w-screen h-screen left-0 top-0  bg-black bg-opacity-60 flex justify-center items-center ${
        show ? "active" : ""
      }`}
    >
      <div className="absolute w-full h-full z-10" onClick={() => onClose()} />
      <div className="img-popup-body z-50">
        <div className="flex justify-end w-full">
          <span
            className="cursor-pointer text-white text-2xl mb-2 text-right"
            onClick={() => onClose()}
          >
            ×
          </span>
        </div>
        <img src={src} alt="project" />
      </div>
      <style jsx>{`
        .img-popup {
          z-index: 6001;
          transition: all ease 0.4s;
          opacity: 0;
          pointer-events: none;
        }
        .img-popup.active {
          opacity: 1;
          pointer-events: auto;
        }
        .img-popup.active .img-popup-body {
          top: 0;
          opacity: 1;
          transition-delay: 0.2s;
        }
        .img-popup-body {
          opacity: 0;
          position: relative;
          top: -100px;
          transition: all ease 0.4s;
        }
      `}</style>
    </div>
  );
};

export default ImagePopUp;
