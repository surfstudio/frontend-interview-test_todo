import { ModalInput } from "../ModalInput/ModalInput";
import { ModalDropdown } from "../ModalDropdown/ModalDropdown";

import "./ModalRow.css";

interface ModalRowProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalRow: React.FC<ModalRowProps> = (props) => {
  const { name, setName, selected, setSelected } = props;

  return (
    <div className="modal__content_row">
      <ModalInput name={name} setName={setName} />
      <ModalDropdown selected={selected} setSelected={setSelected} />
    </div>
  );
};
