import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ className, node, children, ...props }: Element) => {
  const match = /language-(\w+)/.exec(className || "");
  const lang = match && match[1] ? match[1] : "";
  return match ? (
    <SyntaxHighlighter
      {...props}
      PreTag="div"
      style={tomorrow}
      language={lang}
      showLineNumbers={true}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className="bg-gray-200 text-red-500 font-bold">
      {String(children)}
    </code>
  );
};

export default CodeBlock;
