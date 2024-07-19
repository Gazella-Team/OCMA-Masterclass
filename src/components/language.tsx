import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//
export default function Language() {
  const router = useRouter();
  const currentPath = router.pathname.slice(0, 3);

  return (
    <div className="flex bg-blue-500 items-center gap-[4px] p-[4px] rounded-main">
      <Link
        href={"/"}
        className={
          currentPath === "/en"
            ? "p-[6px] flex items-center gap-[6px] rounded-maun cursor-pointer"
            : "bg-blue-600 p-[6px] flex items-center gap-[6px] rounded-main cursor-pointer"
        }
      >
        <img alt="dk" className="w-[16px]" src="/denmark.png"></img>
        <p className="text-[13px]">DK</p>
      </Link>
      <Link
        href={"/en"}
        className={
          currentPath === "/en"
            ? "bg-blue-600 p-[6px] flex items-center gap-[6px] rounded-main cursor-pointer"
            : " p-[6px] flex items-center gap-[6px] rounded-main cursor-pointer"
        }
      >
        <img alt="uk" className="w-[16px]" src="/united-kingdom.png"></img>
        <p className="text-[13px]">EN</p>
      </Link>
    </div>
  );
}