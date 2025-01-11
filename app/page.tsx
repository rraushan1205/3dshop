import Image from "next/image";
import image1 from "../public/img1.webp";
import Link from "next/link";

export default function Home() {
  // bg-gradient-to-r from-orange-500 via-blue-900 to-red-900
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="hero h-[550px] mx-[70px] my-[30px] rounded-3xl w-full bg-[url('../public/img1.webp')] grid  px-10 py-5 place-content-center">
          <div className="text-[80px] font-mono">
            <p>Your Idea,</p>
            <p>Our Service.</p>
            <div className="btns flex text-[20px] my-8 gap-5">
              <Link href={"/buy"}>
                <div className="relative group">
                  <button className="px-5 py-[1px] rounded-lg bg-green-700 hover:bg-green-600 active:bg-green-900">
                    Buy
                    <span className="opacity-0 group-hover:opacity-100 w-[210px] py-1 absolute bottom-10 left-[-10px] bg-black px-1 rounded-md text-[9px]">
                      Own our finely curated 3d printed parts
                    </span>
                  </button>
                </div>
              </Link>
              <Link href={"/"}>
                <button className="px-5 py-[1px] rounded-lg bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black ">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-14 my-5 text-justify bg-slate-900 px-5 py-2 rounded-2xl group">
        <header className="text-[20px] underline underline-offset-8 my-2">
          About Us
        </header>
        <p className="hover:underline group-hover:opacity-30 hover:!opacity-100">
          Transform your ideas into reality with our premium 3D models,
          textures, and assets. From architectural visualization to game
          development, discover our meticulously curated collection of
          high-quality 3D content. Create stunning projects faster with
          professional-grade resources trusted by industry leaders worldwide.
        </p>
        <p className="hover:underline group-hover:opacity-30 hover:!opacity-100">
          Whether you're a seasoned 3D artist, game developer, or architectural
          visualizer, our vast library has everything you need. Browse thousands
          of ready-to-use 3D models, materials, and textures – all optimized for
          seamless integration into your workflow. Each asset is rigorously
          tested for quality and compatibility across major 3D software
          platforms.
        </p>
        <p className="hover:underline group-hover:opacity-30 hover:!opacity-100">
          Save countless hours of modeling time and elevate your projects with
          our industry-standard assets. Join thousands of creative professionals
          who trust us to bring their visions to life. From concept to final
          render, we're your one-stop destination for professional 3D content.
        </p>
        <p className="hover:underline group-hover:opacity-30 hover:!opacity-100">
          Start creating extraordinary 3D experiences today. Explore our
          extensive collection and take your projects to the next level with
          assets that meet the highest industry standards.
        </p>
      </div>
    </>
  );
}
