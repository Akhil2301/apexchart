import React from 'react';
import Modal from 'react-modal';

const ChartModal = ({ selectedData, onClose }) => {
  return (
    <Modal
      isOpen={!!selectedData}
      onRequestClose={onClose}
      contentLabel="Selected Data Modal"
    >
      <h2>Selected Data</h2>
      {selectedData && (
        <div>
          <p>Series: {selectedData.series}</p>
          <p>Category: {selectedData.category}</p>
        </div>
      )}
      <button onClick={onClose}>Close Modal</button>
    </Modal>
  );
};

export default ChartModal;
