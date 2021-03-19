// Interfaces

export interface ITooltip {
  /** The content body of the tooltip */
  children: React.ReactNode;
  /** The visual styling of the tooltip */
  style: "default" | "error" | "success";
}
