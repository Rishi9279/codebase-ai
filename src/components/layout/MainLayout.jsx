import React from "react";
import ActivityBar from "./ActivityBar";
import Sidebar from "./Sidebar";
import AiPanel from "../ai/AiPanel";
import EditorPanel from "../editor/EditorPanel";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <ActivityBar />
      <Sidebar />
      <EditorPanel />
      <AiPanel />
    </div>
  );
};

export default MainLayout;
