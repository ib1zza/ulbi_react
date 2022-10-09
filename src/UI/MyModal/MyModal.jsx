import React from "react";
import s from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClass = [s.myModal];
  if (visible) {
    rootClass.push(s.active);
  }

  return (
    <div className={rootClass.join(" ")} onClick={() => setVisible(false)}>
      <div className={s.myModalContent} onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
export default MyModal;
