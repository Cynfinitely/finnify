import ListeningMaterials from "@/components/ListeningMaterial";
import React from "react";
import videoData from "../public/video_data.json";

const listening = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h2>Listening</h2>
      <div className="flex flex-row">
        {videoData.map((item) => (
          <ListeningMaterials key={item.id} videoId={item.id} />
        ))}
      </div>
    </div>
  );
};

export default listening;
