"use client";
import Smartdoc from "@/components/custom/workspace/Smartdoc";
import Whiteboard from "@/components/custom/workspace/Whiteboard";
import WorkspaceHeader from "@/components/custom/workspace/WorkspaceHeader";
import React, { useState } from "react";

function Workspace() {
  const [activeTab, setActiveTab] = useState("whiteboard");
  return (
    <div>
      <WorkspaceHeader selectedTab={(value: string) => setActiveTab(value)} />
      {activeTab == "whiteboard" ? <Whiteboard /> : <Smartdoc />}
    </div>
  );
}

export default Workspace;
