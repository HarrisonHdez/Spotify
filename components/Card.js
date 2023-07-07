import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiPlayFill } from "react-icons/ri";

const Card = () => {
  return (
    <Link
      href="/"
      className="bg-spotify-lightgray rounded-lg p-4 hover:bg-spotify-lightgrayHover transition-all group"
    >
      <div className="mb-4 relative">
        <Image
          src="/images/taylor.jpg"
          width={200}
          height={350}
          alt="Album"
          className="rounded drop-shadow-2xl mx-auto"
          priority={true}

        />
        <button className="p-3 text-3xl bg-spotify-green rounded-full text-spotify-gray absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out">
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className="font-medium text-gray-100 mb-2">lover</h5>
        <p className="text-gray-400 text-sm w-[18ch]">
          Taylor Swift
        </p>
      </div>
    </Link>
  );
};

export default Card;
