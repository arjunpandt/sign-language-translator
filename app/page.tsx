import Image from "next/image";
import WebCam from "./ui/webcam";
import TextBox from "./ui/textbox"
export default function Home() {
  return (
    <main >
      <WebCam/>
      <TextBox/>
    </main>
  );
}
