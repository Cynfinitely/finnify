import React from "react";
import dynamic from "next/dynamic";

const Recorder = dynamic(() => import("../components/Recorder"), {
  ssr: false,
});

const Speaking = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <Recorder />
    </div>
  );
};

export default Speaking;
