"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const path = [
    {
      title: "scroll",
      path: "/scroll",
    },
    {
      title: "mouse",
      path: "/mouse",
    },
    {
      title: "menu",
      path: "/menu",
    },
  ];

  return (
    <ul className="list-none p-0 m-0">
      {path.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={() => router.push(item.path)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
