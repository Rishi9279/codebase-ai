import React from "react";
import { File } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-6 flex flex-col gap-6">
      <h2>EXPLORER</h2>
      <div className="flex flex-col gap-2">
        <div>▼ src</div>

        <div className="ml-3">▼ components</div>

        <div className="ml-7 flex items-center text-sm gap-0.5">
          <File size={18} />
          ActivityBar.jsx
        </div>

        <div className="ml-7 flex items-center text-sm gap-0.5">
          <File size={18} />
          Sidebar.jsx
        </div>

        <div className="ml-7 flex items-center text-sm gap-0.5">
          <File size={18} />
          MainLayout.jsx
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
