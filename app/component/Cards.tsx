import React from "react";

interface CardsProps {
  name: string;
  img: string;
}

export default function Cards({ name, img }: CardsProps) {
  return (
    <>
      <p>
        Hello, I am {name} with {img}
      </p>
    </>
  );
}
