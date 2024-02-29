import "./ModalBtn.css";

interface ModalBtnProps {
  type?: string;
  children: React.ReactNode;
  size?: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export const ModalBtn: React.FC<ModalBtnProps> = (props) => {
  const { type, children, size, onClick, isDisabled } = props;

  const btnClass = isDisabled
    ? `modalbtn ${size}`.trim()
    : `modalbtn ${type} ${size}`.trim();

  return (
    <button onClick={onClick} className={btnClass} disabled={isDisabled}>
      {children}
    </button>
  );
};
