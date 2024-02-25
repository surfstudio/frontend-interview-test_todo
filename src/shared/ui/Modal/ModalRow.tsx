import { ModalInput } from "./";
import { ModalDropdown } from "./";
import './ModalRow.css'

interface ModalRowProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalRow: React.FC<ModalRowProps> = ({
  name,
  setName,
  selected,
  setSelected,
}) => {
  return (
    <div className="row">
      <ModalInput name={name} setName={setName} />
      <ModalDropdown selected={selected} setSelected={setSelected} />
    </div>
  );
};
