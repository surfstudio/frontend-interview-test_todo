import "./ModalBtn.css";

interface ModalBtnProps {
  type?: string;
  children: React.ReactNode;
  size?: string;
  onClick: () => void;
}

export const ModalBtn: React.FC<ModalBtnProps> = (props) => {
  const { type, children, size, onClick } = props;

  const btnClass =
    type === "primary"
      ? size === "large"
        ? "modalbtn primary large"
        : "modalbtn primary"
      : "modalbtn";
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
