const AiPanel = () => {
  return (
    <div className="w-80 bg-[#252526] text-white p-4  border-l border-[#333]">
      <h2 className="font-semibold text-lg mb-4">AI Assistant</h2>

      <div className="space-y-3">
        <button className="w-full p-3 bg-[#2d2d30] rounded text-left">Intent Mode</button>

        <button className="w-full p-3 bg-[#2d2d30] rounded text-left">Explain Codebase</button>

        <button className="w-full p-3 bg-[#2d2d30] rounded text-left">Decision Memory</button>
      </div>
    </div>
  );
};

export default AiPanel;
