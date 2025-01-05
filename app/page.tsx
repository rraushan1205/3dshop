import Image from "next/image";
import image1 from "../public/img1.webp";
export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="hero h-[550px] mx-[70px] my-[30px] rounded-3xl w-full bg-gradient-to-r from-orange-500 via-blue-900 to-red-900 grid grid-cols-2 px-10 py-5 place-content-center">
        <div className="text-[50px] font-mono">
          <p>Your Idea,</p>
          <p>Our Service.</p>
          <div className="btns flex text-[20px] my-8 gap-5">
            <div className="relative group">
              <button className="px-5 py-[1px] rounded-lg bg-green-700 hover:bg-green-600 active:bg-green-900">
                Buy
                <span className="opacity-0 group-hover:opacity-100 w-[210px] py-1 absolute bottom-10 left-[-10px] bg-black px-1 rounded-md text-[9px]">
                  Own our finely curated 3d printed parts
                </span>
              </button>
            </div>
            <button className="px-5 py-[1px] rounded-lg bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black ">
              Services
            </button>
          </div>
        </div>
        <div className="">
          <Image src={image1} className="w-fit h-fit" alt="hell" />
        </div>
      </div>
    </div>
  );
}
