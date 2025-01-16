"use client";

import { useEffect } from "react";
import "./style.css";

//출처 : https://www.youtube.com/watch?v=4yBxb5RQxPs
export default function ScrollAni() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLDivElement>(".card");
    const stackArea = document.querySelector<HTMLDivElement>(".stack-area");

    function rotateCards() {
      let angle = 0;
      cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          angle = angle - 10;
          card.style.zIndex = `${cards.length - index}`;
        }
      });
    }

    rotateCards();

    const handleScroll = () => {
      const distance = window.innerHeight * 0.5;
      const topVal = stackArea?.getBoundingClientRect().top ?? 0;
      let index = -1 * (topVal / distance + 1);
      index = Math.floor(index);

      for (let i = 0; i < cards.length; i++) {
        if (i <= index) {
          cards[i].classList.add("away");
        } else {
          cards[i].classList.remove("away");
        }
      }
      rotateCards();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-[300vh] relative bg-white flex stack-area">
      <div className="h-screen flex-1 sticky top-0 left-0 flex flex-col items-center justify-center box-border left">
        <div className="w-[420px] text-[84px] font-bold leading-[88px] title">
          스크롤 애니메이션
        </div>
        <div className="w-[420px] text-[14px] mt-8 sub-title">
          스크롤 하면 카드들이 하나씩 위로 사라진다. 스크롤 하면 카드들이 하나씩
          위로 사라진다. 스크롤 하면 카드들이 하나씩 위로 사라진다. 스크롤 하면
          카드들이 하나씩 위로 사라진다. 스크롤 하면 카드들이 하나씩 위로
          사라진다. 스크롤 하면 카드들이 하나씩 위로 사라진다.
        </div>
      </div>
      <div className="h-screen flex-1 sticky top-0 right">
        <div className="card bg-blue-500">
          <div className="sub">Simplified</div>
          <div className="content">Complex tasks are now simple</div>
        </div>
        <div className="card bg-red-500">
          <div className="sub">Boost Productivity</div>
          <div className="content">Perform Tasks in less time</div>
        </div>
        <div className="card bg-purple-500">
          <div className="sub">Facilitated learning</div>
          <div className="content">train anyone from anywhere</div>
        </div>
        <div className="card bg-pink-500">
          <div className="sub">Support</div>
          <div className="content">Now its 24/7 support</div>
        </div>
      </div>
    </div>
  );
}
