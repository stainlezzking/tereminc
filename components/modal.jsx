"use client";

import { useEffect, useRef } from "react";

const Modal = () => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    modalRef.current.close();
    document.body.classList.remove("overflow-auto");
  };
  useEffect(() => {
    const modal = modalRef.current;
    modal.addEventListener("close", closeModal);
    setTimeout(openModal, 3000); // Open modal after 3 seconds

    return () => {
      modal.removeEventListener("close", closeModal);
      document.body.classList.remove("no-scroll"); // Clean up on unmount
    };
  }, []);

  //   use framer motion to add animation when the modal mounts and unmounts the DOM
  // this means that i will be converting the dialog to div soon

  return (
    <>
      <dialog id="my_modal_3" ref={modalRef}>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
