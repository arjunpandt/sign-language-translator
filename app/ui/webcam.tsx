"use client";
import { useState } from "react";
import Webcam from "react-webcam";

const WebCam = () => {
  const [cameraMode, setCameraMode] = useState(false);
  const videoConstraints = {
    width: 930,
    height: 450,
    facingMode: "user",
  };

  return (
    <>
      <div className="m-5">
        <Webcam className="rounded-lg border-2 border-zinc-400" audio={false} videoConstraints={videoConstraints} />
      </div>
      <div className="my-5 mx-20 xl:pl-56 md:pl-56">
        <button className="dark:bg-blue-500 rounded-full text-white font-bold py-2 px-7 mx-10" >
          Start
        </button>
        <button className="dark:bg-red-700 rounded-full text-white border-black font-bold py-2 px-7 mx-10">
          Stop
        </button>
      </div>
    </>
  );
};

export default WebCam;
