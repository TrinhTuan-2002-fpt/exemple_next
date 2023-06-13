import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <p>check</p>
      <Link href={"/about"}>go to about page</Link>
    </main>
  );
}
