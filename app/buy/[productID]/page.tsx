"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function Page() {
  const params = useParams();
  const productId = params.productID;
  return (
    <>
      <p>Heloo I am Product {productId}</p>
    </>
  );
}
