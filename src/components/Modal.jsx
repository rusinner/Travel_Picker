import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, onClose, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {/* turnary expression here because i do nto want children and in specific case DeleteConfirmation be rendered all the time */}
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
