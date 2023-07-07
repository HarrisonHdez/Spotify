import Link from "next/link";
import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";

const ListAlbums = (props) => {
  const { title } = props;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:underline"
        >
          {title}
        </Link>
        <Link
          href="/"
          className="uppercase text-xs font-bold tracking-[2px] hover:underline"
        >
          Mostrar todo
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <Card />
        <Card2 />
        <Card3 />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ListAlbums;
