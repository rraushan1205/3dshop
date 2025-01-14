"use client";
import Link from "next/link";
import { useState } from "react";

export default function Admin() {
  const [logged, setLogged] = useState(false);
  const HandleClick = () => {
    setInterval(() => {
      setLogged(true);
    }, 500);
  };
  if (!logged) {
    return (
      <>
        Not LOgged
        <button onClick={HandleClick} className="px-2 py-1 bg-green-800">
          Log in
        </button>
      </>
    );
  }
  return (
    <>
      <div className="flex ">
        <p>Heloo Admin Logged in</p>
      </div>
    </>
  );
}
