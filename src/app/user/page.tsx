// import LoginApi from "@/lib/Login";
import getAllUsers from "@/lib/Login";
import Link from "next/link";
import React from "react";

const page = async () => {
  // const loginInfo = LoginApi();
  const info: Login = await getAllUsers();
  // console.log(loginInfo.user.name);
  // const content = (
  //   <section>
  //     <h2>{loginInfo.}</h2>
  //   </section>
  // )

  return (
    <div className="flex flex-col">
      <section>
        <h2>
          <Link href="/">Back to Home</Link>
        </h2>
        <hr />
        <p>name login: {info.user.name}</p>
      </section>
    </div>
  );
};

export default page;
