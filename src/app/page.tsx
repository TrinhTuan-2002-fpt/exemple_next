"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <main className="flex flex-col">
      <p>check</p>
      <Link href={"/about"}>go to about page</Link>
    </main>
  );
}
