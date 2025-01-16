"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <ul className="list-none p-0 m-0">
      <li
        className="cursor-pointer text-blue-500 hover:text-blue-700"
        onClick={() => router.push("/scroll")}
      >
        scroll
      </li>
      <li
        className="cursor-pointer text-blue-500 hover:text-blue-700"
        onClick={() => router.push("/mouse")}
      >
        mouse
      </li>
    </ul>
  );
}
