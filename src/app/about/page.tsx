import Link from "next/link";
import React from "react";

const page = () => {
  // throw new Error("Not today!!");
  return (
    <div className="flex flex-col">
      <h2>about </h2>
      <Link href={"/"} replace>
        go to home page
      </Link>
    </div>
  );
};

export default page;
