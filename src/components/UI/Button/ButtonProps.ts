export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  color?: "red" | "blue";
  variant: "outlined" | "contained";
};
