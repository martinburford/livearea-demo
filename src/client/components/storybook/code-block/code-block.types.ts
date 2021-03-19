// Interfaces

export interface ICodeBlock {
  /** The content to show within the footer links component */
  children: React.ReactElement | React.ReactElement[];
  /** Whether the marings should be set to 0 (this is primarily for documentation only stories) */
  noMargins?: boolean;
}
