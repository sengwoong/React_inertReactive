import React from "react";
import Link from "next/link";

function HomeButton({ LinkHref, ContentText }) {
  return (
    <>
      <div className=" w-full h-16 p-10 ">
        <div className="bg-white w-full h-14  border-2 border-spacing-12 border-red-500 rounded-2xl ">
          <Link
            href={LinkHref}
            className="flex text-slate-950 text-center h-full  items-center justify-center"
          >
            {ContentText}
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeButton;
