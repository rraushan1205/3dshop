import Link from "next/link";
import logo from "../../public/logo.jpg";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between px-20 border-b border-gray-800  items-center text-[22px]">
        <div className="logo">
          <Image src={logo} alt="logo" className="w-10 h-10 rounded-3xl" />
        </div>
        <ul className="flex gap-5  py-2">
          <li className="hover:underline-offset-8 py-2 hover:underline">
            <Link href={"/"}>Dashboard</Link>
          </li>
          <li className="hover:underline-offset-8 py-2 hover:underline">
            <Link href={"/buy"}>Buy</Link>
          </li>
          <li className="hover:underline-offset-8 py-2  hover:underline group relative">
            Service
            <span className="hidden w-[160px] group-hover:block absolute top-10 left-[-10px] bg-slate-800  border border-gray-900">
              <ul className="">
                <li className="border-t border-slate-900 hover:bg-slate-900 px-2 cursor-pointer py-2 text-[20px]">
                  <Link href={"/service/3d-design"}> 3D Design</Link>
                </li>
                <li className="border-t border-slate-900 hover:bg-slate-900 px-2 cursor-pointer py-2 text-[20px]">
                  <Link href={"/service/CAD-design"}>CAD Design</Link>
                </li>
                <li className="border-t border-slate-900 hover:bg-slate-900 px-2 cursor-pointer py-2 text-[20px]">
                  <Link href={"/service/video-editing"}>Video Editing</Link>
                </li>
                <li className="border-t border-slate-900 hover:bg-slate-900 px-2 cursor-pointer py-2 text-[20px]">
                  <Link href={"/service/web-design"}>Website Design</Link>
                </li>
              </ul>
            </span>
          </li>
          {/* <li className="hover:underline-offset-8 py-2 hover:underline">
            <Link href={"/design"}>Design</Link>
          </li> */}
        </ul>
        <div className="loginncart flex gap-5 py-2 items-center">
          <div className="login">Raushan</div>
          <div className="cart relative w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="white"
            >
              <defs></defs>
              <g id="cart">
                <path
                  className="cls-1"
                  d="M29.46 10.14A2.94 2.94 0 0 0 27.1 9H10.22L8.76 6.35A2.67 2.67 0 0 0 6.41 5H3a1 1 0 0 0 0 2h3.41a.68.68 0 0 1 .6.31l1.65 3 .86 9.32a3.84 3.84 0 0 0 4 3.38h10.37a3.92 3.92 0 0 0 3.85-2.78l2.17-7.82a2.58 2.58 0 0 0-.45-2.27zM28 11.86l-2.17 7.83A1.93 1.93 0 0 1 23.89 21H13.48a1.89 1.89 0 0 1-2-1.56L10.73 11H27.1a1 1 0 0 1 .77.35.59.59 0 0 1 .13.51z"
                />
                <circle className="cls-1" cx="14" cy="26" r="2" />
                <circle className="cls-1" cx="24" cy="26" r="2" />
              </g>
            </svg>
            <span className="absolute px-1 py-[1px] top-0 right-0 text-center rounded-full bg-red-800 text-[10px]">
              1
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
