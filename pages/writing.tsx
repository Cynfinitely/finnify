import WritingInput from "@/components/WritingInput";
import React from "react";

const writing = () => {
  return (
    <div className="flex  w-full h-full justify-center items-center">
      <WritingInput />
      <div className="w-1/2 bg-cyan-200 h-1/2">OUTPUT MESSAGE</div>
    </div>
  );
};

export default writing;
