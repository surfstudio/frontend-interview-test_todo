import React from "react";

export type Item = {
    id: string;
    name: string;
    description: string;
    category?: string;
}
export interface ModalActiveProps{
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ModalCreateItemProps extends ModalActiveProps{}
export interface ModalEditItemProps extends ModalActiveProps{
    item: Item;
}
export interface ModalRemoveItemProps extends ModalActiveProps{
    item: Item;
}
export interface ModalNameProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}
export interface ModalDropdownProps {
    selected: string | undefined;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}