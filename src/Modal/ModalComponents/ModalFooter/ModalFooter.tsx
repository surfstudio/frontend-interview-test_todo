import { ModalBtn } from "../ModalButton/ModalBtn";

import "./ModalFooter.css";

interface ModalFooterProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  submitBtnText: string;
  size?: string;
  onSubmit: () => void;
  isDisabled?: boolean;
}

export const ModalFooter: React.FC<ModalFooterProps> = (props) => {
  const { clearState, setActive, submitBtnText, size, onSubmit, isDisabled } =
    props;

  const handleClose = () => {
    clearState && clearState();
    setActive(false);
  };

  return (
    <footer className="modal__content-footer">
      <ModalBtn
        type="primary"
        size={size || ""}
        onClick={onSubmit}
        isDisabled={isDisabled}
      >
        {submitBtnText}
      </ModalBtn>
      <ModalBtn onClick={handleClose}>Закрыть</ModalBtn>
    </footer>
  );
};
