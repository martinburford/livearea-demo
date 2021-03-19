import Classnames from "classnames/bind";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Styles
import CodeTheme from "react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light";
import styles from "./code-block.module.scss";

// Types
import { ICodeBlock } from "./code-block.types";

export const CodeBlock: React.FC<ICodeBlock> = ({ children, noMargins = false }) => {
  // Bind classnames to the components CSS module object in order to access its modular styles
  const cx = Classnames.bind(styles);
  const classnames = cx({
    "code-block": true,
    "no-margins": noMargins
  });

  return (
    <div className={classnames}>
      <h4 className={styles.heading}>Code sample</h4>
      <div className={styles["code"]}>
        <SyntaxHighlighter format="true" language="jsx" showLineNumbers={true} startingLineNumber={1} style={CodeTheme}>
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
