import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h2>about </h2>
      <Link href={"/"} replace>
        go to home page
      </Link>
    </>
  );
};

export default page;
