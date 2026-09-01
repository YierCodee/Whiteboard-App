import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { Label } from "recharts";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import axios from "axios";
import { useRouter } from "next/navigation";
function CreateNewBoardDialog() {
  const [workspaceName, setworkspaceName] = useState("");
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState(false);
  const route = useRouter();
  const handleCreateBoard = async () => {
    if (workspaceName.trim() === "" || workspaceName.length > 30) {
      toast.add({
        type: "error",
        title: "Invalid Workspace Name",
        description:
          "Workspace name is required and must be between 1 and 30 characters long.",
      });
      return;
    }
    setLoading(true);
    const projectId = crypto.randomUUID();
    const result = await axios.post("/api/projects", {
      projectName: workspaceName,
      projectId: projectId,
    });

    console.log(result.data);
    toast.add({
      type: "success",
      title: "New Workspace Created",
    });
    setLoading(false);
    setDialog(false);
    route.push('/workspace/' + projectId);
  };
  return (
    <div className="flex flex-col gap-2">
      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogTrigger>
          {/* Mengubah Button menjadi div bergaya tombol (Menghindari penumpukan button HTML) */}
          <Button className="w-full">
            <Plus className="w-4 h-4" /> Create New Board
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              Whiteboard Workspace Name
            </DialogTitle>
          </DialogHeader>
          <div>
            <label className="text-gray-500">
              Enter WhiteBoard Workspace Name
            </label>
            <Input
              placeholder="Workspace Name"
              className="mt-1"
              onChange={(e) => setworkspaceName(e.target.value)}
            />
          </div>

          <DialogFooter>
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              disabled={workspaceName?.length == 0 || loading}
              onClick={handleCreateBoard}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateNewBoardDialog;
