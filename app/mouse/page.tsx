"use client";
import { clsx } from "clsx";
import { useState, useEffect } from "react";

export default function MouseAni() {
  const [dot, setDot] = useState<{ id: number; x: number; y: number }[]>([]);
  const [burst, setBurst] = useState<boolean>(false);
  const [burstPosition, setBurstPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleBurst = (e: MouseEvent) => {
    const { clientX: x, clientY: y } = e;
    setBurst(true);
    setBurstPosition({ x, y });
    setTimeout(() => {
      setBurst(false);
      setBurstPosition(null);
    }, 2000);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX: x, clientY: y } = e;
    const newDot = { id: Date.now(), x, y };
    setDot((prev) => [...prev, newDot]);

    setTimeout(() => {
      setDot((prev) => prev.filter((dot) => dot.id !== newDot.id));
    }, 300);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleBurst);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleBurst);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-600 overflow-hidden">
      {dot.map((dot) => (
        <div
          key={dot.id}
          style={{
            top: dot.y,
            left: dot.x,
          }}
          className={clsx(
            "absolute w-2 h-2 bg-white rounded-full animate-fade transform -translate-x-1/2 -translate-y-1/2"
          )}
        />
      ))}
      {burst && burstPosition && (
        <div
          style={{
            top: burstPosition.y,
            left: burstPosition.x,
          }}
          className="absolute"
        >
          <span className="firework top-[25px] left-[2px] animate-burst"></span>
          <span className="firework top-[13px] left-[63px] w-[60px] h-[60px] animate-burst delay-300 border-green-500"></span>
          <span className="firework top-[-10px] left-[35px] w-[140px] h-[140px] animate-burst delay-600 border-sky-400 border-4"></span>
          <span className="firework top-[5px] left-[12px] w-[110px] h-[110px] animate-burst delay-400 border-yellow-500"></span>
          <span className="firework top-[-9px] left-[-17px] w-[190px] h-[190px] animate-burst delay-400 border-purple-400 border-5"></span>
        </div>
      )}
    </div>
  );
}
