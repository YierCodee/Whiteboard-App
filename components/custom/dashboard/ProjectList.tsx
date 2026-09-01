"use client";
import { Button } from "@/components/ui/button";
import { Folder } from "lucide-react";
import React, { useState } from "react";

function ProjectList() {
  // Tambahkan default nilai array kosong [] agar .length tidak error saat pertama dimuat
  const [projectList, setProjectsList] = useState([]);

  return (
    <div>
      {projectList.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center p-10 border rounded-xl mt-10 gap-3">
          <Folder className="h-12 w-12" />
          <h2 className="text-2xl font-bold">No Project Found</h2>
          <p className="text-muted-foreground">Create your first board to start brainstorming, Planning!</p>
          <Button> + Create New Board</Button>
        </div>
      ) : (
        /* Jika ada data project */
        <div>
          <p>Daftar project kamu di sini.</p>
        </div>
      )}
    </div>
  );
}

export default ProjectList;
