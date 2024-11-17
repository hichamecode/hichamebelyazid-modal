import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Modal from './components/Modal/Modal';
import './App.css';
function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    return (_jsxs("div", { children: [_jsx("button", { className: 'test-button', onClick: handleOpenModal, children: "CLICK TO TEST THE MODAL" }), isModalOpen && (_jsx(Modal, { modalTitle: "Enter your title", modalText: "Enter your text", onClose: handleCloseModal }))] }));
}
export default App;
