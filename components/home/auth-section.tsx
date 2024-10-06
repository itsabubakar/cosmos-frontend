import { Person } from "@/public/assets/icons";
import Link from "next/link";
import React from "react";

const AuthSection = () => {
  return (
    <div className="px-4 py-7 text-center">
      <h3 className="pb-4">Sign in to get the best experience</h3>
      <Link
        className="rounded-xl mb-3 py-2 items-center shadow-[0px_2px_3px_0px_rgba(0,0,0,0.25)] bg-[#FED813] font-medium flex justify-center gap-x-2"
        href="/"
      >
        Sign in <Person width="14" />
      </Link>

      <Link className="text-[#0E5767]" href={"/"}>
        Create an account
      </Link>
    </div>
  );
};

export default AuthSection;
