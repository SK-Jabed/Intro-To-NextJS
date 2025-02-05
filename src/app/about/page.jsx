import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      About Page is here
      <div></div>
      <li>
        <Link
          href={"/about/mission"}
          className="text-lg font-medium text-gray-800 hover:text-bg-cyan-400"
        >
          Mission
        </Link>
      </li>
      <li>
        <Link
          href={"/about/vision"}
          className="text-lg font-medium text-gray-800 hover:text-bg-cyan-400"
        >
          Services
        </Link>
      </li>
    </div>
  );
};

export default page;
