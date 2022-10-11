import React from "react";
import { createPortal } from "react-dom";

export const BackDrop = (props) => {
  <div onClick={props.onConfirm}>close back drop</div>;
};
const ModalOverlay = (props) => {
  <div>Modal OverLay</div>;
};

export const Portal = (props) => {
  return (
    <div>
      {createPortal(
        <BackDrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(<ModalOverlay />, document.getElementById("overlay-root"))}
    </div>
  );
};
