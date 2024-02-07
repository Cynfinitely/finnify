import React from "react";

const writing = () => {
  return (
    <div className="flex  w-full h-full justify-center items-center">
      <form className="flex flex-col border-r-4 border-[var(--thirdColor)] p-6 gap-6 w-1/2 h-1/2">
        <textarea name="" id="" />
        <input type="submit" value="Check" />
      </form>
      <div className="w-1/2 bg-cyan-200 h-1/2">OUTPUT MESSAGE</div>
    </div>
  );
};

export default writing;
