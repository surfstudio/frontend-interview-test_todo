import close from "../../../icons/close.svg";

import "./ModalHeader.css";

interface ModalHeaderProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
  const { clearState, title, setActive } = props;

  const handleClose = () => {
    clearState && clearState();
    setActive(false);
  };

  return (
    <header className="modal__content-header">
      <h4 className="modal__content-title">{title}</h4>
      <button className="modal__content-header__btn" onClick={handleClose}>
        <img src={close} alt="close" />
      </button>
    </header>
  );
};
