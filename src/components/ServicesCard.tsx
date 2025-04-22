"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

interface ServicesCardProps {
  image: string;
  title: string;
  emoji: string;
  text: string;
}

const ServicesCard = ({
  image,
  title,
  emoji,
  text,
  ...props
}: ServicesCardProps & React.HTMLProps<HTMLDivElement>) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative border border-zinc-800 p-5 flex flex-col justify-center items-start hover:scale-[1.03] transition duration-300 rounded overflow-hidden group"
      {...props}
    >
      {/* Glow efekti */}
      <motion.div
        className="absolute w-40 h-40 bg-white rounded-full pointer-events-none blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-0"
        style={{
          x: useTransform(mouseX, (x) => x - 80),
          y: useTransform(mouseY, (y) => y - 80),
        }}
      />

      {/* İçerik */}
      <div className="z-10 w-full rounded ">
        {image && (
          <Image
            src={image}
            alt="project image"
            width={300}
            height={200}
            className="cover mb-2 rounded-lg"
          />
        )}
        <h2 className="text-zinc-300 font-semibold text-lg">
          {emoji} {title}
        </h2>
        <p className="mt-2 font-thin text-zinc-400">{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
