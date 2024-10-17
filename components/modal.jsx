"use client";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Modal = () => {
  const [show, setShow] = useState(false);
  const AutosubscribeAlertModal = function () {
    // using session so its cleared on close or reload of tab
    // also modify this so that when subscribed, it is saved to the local storage
    const alerted = sessionStorage.getItem("subscribeAlert");
    if (!alerted) {
      setTimeout(function () {
        setShow(true);
        sessionStorage.setItem("subscribeAlert", "true");
      }, 10000);
    }
  };

  useEffect(AutosubscribeAlertModal, []);
  useEffect(
    function () {
      if (show) return document.body.classList.add("overflow-hidden");
      if (!show) return document.body.classList.remove("overflow-hidden");
    },
    [show]
  );
  return (
    <>
      <AnimatePresence>
        {show && (
          <>
            <div className="z-50 top-0 left-0 w-screen fixed h-screen flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setShow(false)}
                className="block w-full h-full bg-black/30 absolute top-0 left-0"
              ></motion.span>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="z-20 bg-white rounded-lg w-full max-w-[400px] "
              >
                <div onClick={() => setShow(false)} className="ms-auto w-fit rounded-full bg-slate-400">
                  <X />
                </div>
                <h1> Hello worlds</h1>
                <div className="h-10"></div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
