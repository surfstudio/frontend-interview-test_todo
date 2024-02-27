import { ModalInput } from "./";
import { ModalDropdown } from "./";
import './ModalRow.css'
import React from "react";
import {ModalDropdownProps, ModalNameProps} from "../../types/item";

type ModalRowProps = ModalNameProps & ModalDropdownProps;

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