import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ClosingButton from "../ClosingButton/ClosingButton";
import "./Modal.css";
function Modal({ modalTitle, modalText, onClose }) {
    // this is to close the modal by pressing Esc or Enter key
    const handleKeyDown = (event) => {
        if (event.key === 'Escape' || 'Enter') {
            onClose();
        }
    };
    return (_jsx("div", { className: "modal", role: "dialog", "aria-modal": "true", onKeyDown: handleKeyDown, children: _jsxs("div", { className: "modal-content", children: [_jsx("h2", { className: "modal-title", children: modalTitle }), _jsx("p", { className: "modal-text", children: modalText }), _jsx(ClosingButton, { onClick: onClose, closingButtonText: "Close" })] }) }));
}
export default Modal;
