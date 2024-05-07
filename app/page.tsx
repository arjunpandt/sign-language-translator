import Image from "next/image";
import WebCam from "./ui/webcam";
import TextBox from "./ui/textbox"
export default function Home() {
  return (
    <main >
      <div className=" grid text-center"> 
        <p className="mt-6 font-bold text-[1.5rem]">Welcome to Nashtech</p>
        <p className="font-bold text-[3rem] "> Sign Language Translator</p>
      </div>
      <div className="flex mt-10 ml-36">
      <WebCam/>
      <TextBox/>
      </div>
    </main>
  );
}
