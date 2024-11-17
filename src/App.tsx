import { useState } from 'react';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className='test-button' onClick={handleOpenModal}>CLICK TO TEST THE MODAL</button>
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
