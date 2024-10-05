export type ButtonStyle =
  | "primary"
  | "secondary"
  // | "green"
  // | "red"
  // | "yellow"
  // | "blue"
  // | "black"
  | "exit";

export interface ButtonProps {
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  buttonStyle?: ButtonStyle;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: React.CSSProperties;
}
