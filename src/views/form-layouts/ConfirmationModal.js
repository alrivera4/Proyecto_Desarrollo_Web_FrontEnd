// ConfirmationModal.js

import React from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm, title, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmation Modal"
    >
      <h2>{title}</h2>
      <p>{message}</p>
      <div>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Aceptar
        </Button>
        <Button variant="contained" color="secondary" onClick={onRequestClose}>
          Cancelar
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
