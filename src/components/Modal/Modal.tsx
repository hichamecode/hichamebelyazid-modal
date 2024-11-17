import ClosingButton from "../ClosingButton/ClosingButton";
import "./Modal.css";

interface ModalProps {
  modalTitle: string;
  modalText: string;
  onClose: () => void;
}

function Modal({ modalTitle, modalText, onClose }: ModalProps) {

  // this is to close the modal by pressing Esc or Enter key
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' || 'Enter') {
      onClose(); 
    }
  };

  return (
    <div className="modal" role="dialog" aria-modal="true" onKeyDown={handleKeyDown}>
      <div className="modal-content">
        <h2 className="modal-title">{modalTitle}</h2>
        <p className="modal-text">{modalText}</p>
        <ClosingButton onClick={onClose} closingButtonText="Close" />
      </div>
    </div>
  );
}

export default Modal;
