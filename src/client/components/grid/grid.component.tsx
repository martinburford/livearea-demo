import React from "react";

// Styles
import "./grid.scss";

// Types
import { ICol } from "./grid.types";

const Col: React.FC<ICol> = ({ children, desktop, mobile, offset, span, style, tablet }) => {
  const colClassnames = ["col"];

  // Was a default (non-responsive) span column value given?
  if (span) {
    colClassnames.push(`col-${span}`);
  }

  // Was a default (non-responsive) column offset value given?
  if (offset) {
    colClassnames.push(`col-offset-${offset}`);
  }

  // Were any responsive-specific values given?
  // Mobile breakpoint
  if (mobile) {
    const { offset: mobileOffset, span: mobileSpan } = mobile;

    mobileSpan && colClassnames.push(`col-mobile-${mobileSpan}`);
    mobileOffset && colClassnames.push(`col-mobile-offset-${mobileOffset}`);
  }

  // Tablet breapoint
  if (tablet) {
    const { offset: tabletOffset, span: tabletSpan } = tablet;

    tabletSpan && colClassnames.push(`col-tablet-${tabletSpan}`);
    tabletOffset && colClassnames.push(`col-tablet-offset-${tabletOffset}`);
  }

  // Desktop breakpoint
  if (desktop) {
    const { offset: desktopOffset, span: desktopSpan } = desktop;

    desktopSpan && colClassnames.push(`col-desktop-${desktopSpan}`);
    desktopOffset && colClassnames.push(`col-desktop-offset-${desktopOffset}`);
  }

  return (
    <div className={colClassnames.join(" ")} data-selector="grid-column" style={{ ...style }}>
      {children}
    </div>
  );
};

const Row = ({ children }) => {
  return <div className="row">{children}</div>;
};

export default {
  Col,
  Row
};
