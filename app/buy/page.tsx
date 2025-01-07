import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="px-20 py-5 text-[25px]">Buy Page</header>
      <div className="my-10 mx-20 grid grid-cols-5 gap-5 cursor-default">
        <div className="border border-gray-900 h-fit">
          <header className="text-[22px] px-5 py-3">Categories</header>
          <ul className="pt-1 cursor-pointer">
            <li className="border-t border-gray-900 py-1 px-3">Mug</li>
            <li className="border-t border-gray-900 py-1 px-3">Home Decor</li>
            <li className="border-t border-gray-900 py-1 px-3">Key Chains</li>
            <li className="border-t border-gray-900 py-1 px-3">Flower Pots</li>
            <li className="border-t border-gray-900 py-1 px-3">Helmets</li>
            <li className="border-t border-gray-900 py-1 px-3">
              Mobile Accessories
            </li>
            <li className="border-t border-gray-900 py-1 px-3">
              Table organiser
            </li>
            <li className="border-t border-gray-900 py-1 px-3">
              Kitchen Accessories
            </li>
            <li className="border-t border-gray-900 py-1 px-3">Lamps</li>
            <li className="border-t border-gray-900 py-1 px-3">Wall Arts</li>
          </ul>
        </div>
        <div className="border border-gray-900 col-span-4 h-fit">
          <header className="text-[22px] px-2 py-1 underline">Mug</header>
          <hr className="mx-5 border-t-[1px] border-gray-900 outline-none" />
          <div className="cards mx-10 my-5">
            <div className="card w-[220px] h-[330px] border border-gray-800">
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPFd4HmmN4drKhTyPeBr2KeK0Rh1T6MW3rA08Ggq5EGkM4YMNSkbjFgMKnkj1L0JHRFwcNvGF0X7R6lUEnGS3V1gHuJAd57Tb6IBk6FA2YYyD9eucJ76Nh&usqp=CAE"
                alt=""
              />
              <div className="desc flex flex-col mx-2">
                <span className=" text-wrap">Mug holder (3d printed)</span>
                <div className="price flex gap-1">
                  <span className="">₹199</span>{" "}
                  <span className="text-gray-700 line-through">₹399</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
