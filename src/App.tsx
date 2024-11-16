import { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={handleOpenModal}>Open The Modal</button>
      {isModalOpen && (
        <Modal
          modalTitle="Enter your title"
          modalText="Enter your text"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
