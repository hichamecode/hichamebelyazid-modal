import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={handleOpenModal}>Open The Modal</button>
      {isModalOpen && (
        <Modal
          modalTitle="Enter Your Title"
          modalText="Enter Your Text"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
