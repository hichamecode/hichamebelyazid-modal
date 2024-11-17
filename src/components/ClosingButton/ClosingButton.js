import { jsx as _jsx } from "react/jsx-runtime";
import './ClosingButton.css';
function ClosingButton({ onClick, closingButtonText }) {
    return (_jsx("button", { className: "closing-button", onClick: onClick, children: closingButtonText }));
}
export default ClosingButton;
