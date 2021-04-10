import React from "react";

type Props = {
  show: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ show, onClose, children }) => {
  return (
    <div className={show ? "" : "hidden"}>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
        onClick={() => onClose()}
      >
        <div
          className="w-full md:w-1/2 bg-white rounded-md shadow p-2 m-2"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
