import Image from "next/image";
import image1 from "../public/img1.webp";
import three_d from "../public/3d.webp";
import webd from "../public/webd.webp";
import cad from "../public/cad.webp";
import vedit from "../public/vedit.webp";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
export default function Home() {
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
                    <span className="opacity-0 group-hover:opacity-100 w-[210px] py-1 absolute bottom-10 left-[-0px] bg-black px-1 rounded-md text-[9px]">
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
        <header className="text-[22px] underline underline-offset-8 my-2 font-extrabold">
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
      <Analytics />
      <div className="flex gap-5 mx-20 my-5">
        <div className="bg-gray-900 w-full rounded-2xl flex items-center flex-col">
          <header className="text-[25px] ">Our Service</header>
          <div className="grid grid-cols-3 my-5">
            <div className="d"></div>
            <div className="group relative">
              <Image
                src={three_d}
                alt="3d"
                className="h-fit w-[120px] rounded-xl my-1"
              />
              <span className="text-[14px] absolute top-[-20px] left-0 hidden group-hover:block">
                3D Designing
              </span>
            </div>
            <div className="d"></div>
            <div className="group relative">
              <Image
                src={webd}
                alt="3d"
                className="h-[100px] w-[100px] rounded-xl my-1"
              />
              <span className="text-[14px] w-fit  absolute top-[-20px] left-0 hidden group-hover:block">
                Wbsite Designing
              </span>
            </div>
            <div className="d"></div>
            <div className="group relative mx-3">
              <Image
                src={cad}
                alt="3d"
                className="h-[75px] w-[100px] rounded-xl my-1"
              />
              <span className="text-[14px] absolute top-[-20px] left-0 hidden group-hover:block">
                CAD Designing
              </span>
            </div>
            <div className="d"></div>
            <div className="group relative">
              <Image
                src={vedit}
                alt="3d"
                className="h-[100px] w-[100px] rounded-xl my-1"
              />
              <span className="text-[14px] absolute top-[-20px] left-0 hidden group-hover:block">
                Video Editing
              </span>
            </div>
            <div className="d"></div>
          </div>
        </div>
        <div className="bg-gray-800 w-full rounded-2xl flex justify-center items-center flex-col">
          <header className="text-[25px]">Contacts</header>
          <div className="flex flex-col mt-10">
            <div className="flex my-1 border border-gray-900 px-2 rounded-2xl py-1">
              <svg
                viewBox="-2.4 -2.4 28.80 28.80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0)"
                className="w-7 h-7"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
              <span className="">+91 7837167164</span>
            </div>
            <div className="flex my-1 border border-gray-900 px-2 rounded-2xl py-1">
              <svg
                height="200px"
                width="200px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="#000000"
                className="w-7 h-7"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      className="st0"
                      d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009 c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067 c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745 c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51 c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05 c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104 c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929 c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443 c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925 l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244 c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16 c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572 c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span className="mx-1">
                <Link href={"mailto:raushanraj1205@gmail.com.com"}>
                  raushanraj1205@gmail.com
                </Link>
              </span>
            </div>
            <div className="flex my-1 border border-gray-900 px-2 rounded-2xl py-1">
              <svg
                fill="#000000"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 308 308"
                xmlSpace="preserve"
                className="w-7 h-7"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="XMLID_468_">
                    {" "}
                    <path
                      id="XMLID_469_"
                      d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                    ></path>{" "}
                    <path
                      id="XMLID_470_"
                      d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <div className="mx-1">
                <Link
                  href={
                    "https://wa.me/7837167164?text=Hey,%20I%27m%20interested%20"
                  }
                  target="_blank"
                >
                  +917837167164
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[60px] rounded-xl px-5 py-5 bg-slate-950">
        <h1 className="text-[25px]">Top Picks</h1>
      </div>
    </>
  );
}
