export type ToastProps = {
  id: number;
  text: string;
  severity: "success" | "info" | "warning" | "error";
  variant?: "filled" | "outlined" | "standard";
  Icon?: React.ComponentType<any> | false;
  alertTitle?: string;
};
