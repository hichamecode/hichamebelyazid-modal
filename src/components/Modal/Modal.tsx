import ClosingButton from '../ClosingButton/ClosingButton';
import './Modal.css'

interface ModalProps {
  modalTitle: string;
  modalText: string;
  onClose: () => void;
}

function Modal({ modalTitle, modalText, onClose }: ModalProps) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2 className='modal-title'>{modalTitle}</h2>
        <p className='modal-text'>{modalText}</p>
        <ClosingButton onClick={onClose} closingButtonText="Close" />
      </div>
    </div>
  );
}

export default Modal;
