import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const CodeBlock = ({ data }) => {
  const codeString = data;
  return (
    <div className="text-[0.4rem] leading-3 rounded">
      <SyntaxHighlighter
        language="json"
        style={docco}
        customStyle={{ padding: "25px", borderRadius: "5px" }}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
