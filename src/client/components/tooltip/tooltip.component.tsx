import Classnames from "classnames/bind";
import React from "react";

// Styles
import styles from "./tooltip.module.scss";

// Types
import { ITooltip } from "./tooltip.types";

export const Tooltip: React.FC<ITooltip> = ({ children, style }) => {
  // Bind classnames to the components CSS module object in order to access its modular styles
  const cx = Classnames.bind(styles);
  const classnames = cx({
    "style-default": style === "default",
    "style-error": style === "error",
    "style-success": style === "success",
    tooltip: true
  });

  return (
    <div className={classnames} data-selector="tooltip">
      {children}
    </div>
  );
};

export default Tooltip;
