import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const Recorder = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h1>Record your pronunciation</h1>
      <p>Status: {status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <audio src={mediaBlobUrl} controls />
    </div>
  );
};

export default Recorder;
