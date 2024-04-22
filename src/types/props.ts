import { User } from "./users";

export interface UiInputProps {
  id: string;
  labelText: string;
  modelValue: string;
  type?: string;
}

export interface UiButtonProps {
  disabled?: boolean;
}

export interface AccordionItemProps {
  activeId: number | null;
  currentId: number;
}

export interface UserProps {
  user: User;
}
