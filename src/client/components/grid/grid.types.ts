type columnsType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// Interfaces

export interface ICol {
  desktop?: {
    /** How many columns to offset a column by (desktop) */
    offset?: columnsType;
    /** How many columnsa column should span (desktop) */
    span?: columnsType;
  };
  /** Response customizations (mobile) */
  mobile?: {
    /** How many columns to offset a column by (desktop) */
    offset?: columnsType;
    /** How many columnsa column should span (desktop) */
    span?: columnsType;
  };
  /** How many columns to offset a column by */
  offset?: columnsType;
  /** How many columnsa column should span */
  span?: columnsType;
  /** Any inline style overrides */
  style?: {
    [key: string]: string;
  };
  /** Response customizations (tablet) */
  tablet?: {
    /** How many columns to offset a column by (desktop) */
    offset?: columnsType;
    /** How many columnsa column should span (desktop) */
    span?: columnsType;
  };
}
