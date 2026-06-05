import React from "react";
import Editor from "@monaco-editor/react";
import { Code2 } from "lucide-react";

const EditorPanel = () => {
  return (
    <div className="flex-1 overflow-hidden bg-[#1e1e1e]">
      <div className="h-10 bg-[#252526] border-b border-[#333] flex items-center">
        <div className="px-4 h-full flex items-center text-blue-400 gap-2 bg-[#1e1e1e] border-r border-[#333]">
          <Code2 size={18} />
          <span>App.jsx</span>
        </div>
      </div>
      <Editor
        height="100vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={`
          const App = () => {
            return <div>Hello Javascript</div>
            }
            export default App;
            `}
      />
    </div>
  );
};

export default EditorPanel;
