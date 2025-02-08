"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  const isLoggedIn = true;

  const handleNavigate = () => {
    if (isLoggedIn) {
      router.push("/about/vision");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      About Page is here
      <div className="flex justify-between">
        <p>
          <Link
            href={"/about/mission"}
            className="text-lg font-medium text-gray-800 hover:text-bg-cyan-400"
          >
            Mission
          </Link>
        </p>
        <button
          type="button"
          onClick={handleNavigate}
          className="text-lg font-medium text-gray-800 hover:text-bg-cyan-400"
        >
          Vision
        </button>
      </div>
    </div>
  );
};

export default page;
