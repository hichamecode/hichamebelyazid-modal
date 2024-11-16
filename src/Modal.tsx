import ClosingButton from './Button';
import './styles/Modal.css'

interface ModalProps {
  modalTitle: string;
  modalText: string;
  onClose: () => void;
}

function Modal({ modalTitle, modalText, onClose }: ModalProps) {
  return (
    <div className='modal-styles'>
      <div className='modal-content-styles'>
        <h2>{modalTitle}</h2>
        <p>{modalText}</p>
        <ClosingButton onClick={onClose} closingButtonText="Close" />
      </div>
    </div>
  );
}

export default Modal;
