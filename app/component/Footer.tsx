import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="border-t border-gray-900 mt-5 py-10  left-0 bottom-0 w-full">
        <div className="flex justify-center items-center flex-col">
          <h1 className="">Developed By: Raushan Raj</h1>
          <ul className="flex gap-3">
            <li className="">
              <Link href={"/Login-Admin/session"}>Admin Panel</Link>
            </li>
            <li className="">Buy</li>
            <li className="">Design</li>
          </ul>
        </div>
      </div>
    </>
  );
}
