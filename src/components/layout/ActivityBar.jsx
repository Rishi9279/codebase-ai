import React from "react";
import { Folder, Search, GitFork, Bug, Blocks, Settings, CircleUser } from "lucide-react";

const ActivityBar = () => {
  return (
    <div className="w-14 bg-gray-800 text-white h-screen flex justify-between flex-col  p-4 items-center ">
      <div className="flex flex-col gap-7">
        <Folder />
        <Search />
        <GitFork />
        <Bug />
        <Blocks />
      </div>
      <div className="flex flex-col gap-6">
        <CircleUser />
        <Settings />
      </div>
    </div>
  );
};

export default ActivityBar;
