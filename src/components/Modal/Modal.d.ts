import "./Modal.css";
interface ModalProps {
    modalTitle: string;
    modalText: string;
    onClose: () => void;
}
declare function Modal({ modalTitle, modalText, onClose }: ModalProps): import("react/jsx-runtime").JSX.Element;
export default Modal;
