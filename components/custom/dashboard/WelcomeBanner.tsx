"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Sparkle } from "lucide-react";
import React from "react";
import CreateNewBoardDialog from "./CreateNewBoardDialog";

function WelcomeBanner() {
  const { user } = useUser();
  return (
    <div className="p-10 m-5 border rounded-xl bg-linear-to-r from-blue-200 to-purple-200 flex justify-between items-center">
      {/* bungkus */}
      <div className="flex-1 w-full">
        <div className="flex items-center gap-2 mb-5 text-purple-500">
          <Sparkle /> Your creative workspace
        </div>

        <h2 className="text-2xl font-bold">
          Welcome Back,{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
            {user?.fullName}
          </span>{" "}
          👋
        </h2>
        <p className="mt-2">Bring Your Ideas to Life on infinite canvas</p>

        <div className="flex items-center gap-2 mt-5">
          <CreateNewBoardDialog />
          <Button variant="outline" size="lg">
            <Sparkle className="w-4 h-4 text-purple-600" />
            <span> Ai Helper </span>
          </Button>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center justify-center bg-white border border-slate-100 p-6 rounded-2xl shadow-xl shadow-slate-100/50 w-64 h-36 relative select-none shrink-0">
        <div className="absolute top-3 left-3 flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-400"></div>
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
        </div>
        <div className="flex items-center gap-2 mb-3 mt-4">
          <span className="text-[11px] font-semibold px-3 py-1.5 bg-[#FFF9C4] text-amber-900 rounded-full flex items-center gap-1 shadow-sm border border-amber-200/30">
            New Idea <span className="text-amber-400 text-xs">✨</span>
          </span>
          <span className="text-[11px] font-semibold px-3 py-1.5 bg-[#E8EAF6] text-indigo-900 rounded-full shadow-sm border border-indigo-100/50">
            AI Brainstorm
          </span>
        </div>
        <div className="text-[10px] font-semibold text-slate-500 bg-[#F4F6F9] border border-slate-200/60 px-4 py-1.5 rounded-full tracking-wide shadow-2xl shadow-slate-100/10">
          Design <span className="text-slate-300 mx-0.5">→</span> Build{" "}
          <span className="text-slate-300 mx-0.5">→</span> Ship
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
