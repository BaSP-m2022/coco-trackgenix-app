import React from 'react';
import styles from './modal.module.css';

const Modal = ({ children, handleConfirm, showModal, closeModal }) => {
  const handleModalOverlayClick = (e) => e.stopPropagation();

  if (!showModal) {
    return null;
  }

  return (
    <div onClick={closeModal} className={styles.modalOverlay}>
      <div onClick={handleModalOverlayClick} className={styles.modalWrapper}>
        <button onClick={closeModal} className={styles.closeBtn}>
          X
        </button>
        {children}
        <footer className={styles.buttonsFooter}>
          <button onClick={closeModal} className={styles.cancelBtn}>
            Cancel
          </button>
          <button onClick={handleConfirm} className={styles.confirmBtn}>
            Confirm
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
