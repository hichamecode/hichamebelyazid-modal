import './ClosingButton.css'

interface ClosingButtonProps {
  onClick: () => void;
  closingButtonText: string;
}

function ClosingButton({ onClick, closingButtonText }: ClosingButtonProps) {
  return (
    <button className="closing-button" onClick={onClick}>
      {closingButtonText}
    </button>
  );
}

export default ClosingButton;
