import React from 'react';

interface ListeningMaterialsProps {
  videoId: string;
}

const ListeningMaterials: React.FC<ListeningMaterialsProps> = ({ videoId }) => {
  return (
    <div className="video-container">
      <iframe
        width="400"
        height="300"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default ListeningMaterials;