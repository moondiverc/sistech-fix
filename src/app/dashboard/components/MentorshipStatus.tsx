// components/MentorshipStatus.tsx
import React from "react";
import { Button } from "./button";

export default function MentorshipStatus() {
  return (
    <div
      className="w-[612px] h-[707px] p-5 gap-5 rounded-[20px] flex flex-col items-center"
      style={{
        background: "#FFFFFF40",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "inset 0 1px 1px rgba(255,255,255,0.25)",
        opacity: 1,
      }}
    >
      {/* Judul Card - rata kiri */}
      <h2
        className="font-rubik font-semibold text-[24px] leading-[150%] mb-4 text-left"
        style={{
          color: "#1E3A8A",
          width: "562px",
          height: "36px",
          opacity: 1,
        }}
      >
        Mentorship Status
      </h2>

      {/* Emoji - center */}
      <div className="text-[100px] mb-2 text-center">🙂</div>

      {/* Deskripsi - center */}
      <p
        className="font-inter font-normal text-[20px] leading-[150%] text-center mb-6 mx-auto"
        style={{
          width: "562px",
          height: "90px",
          color: "#111827",
          opacity: 1,
        }}
      >
        You don’t have a mentor yet. Start exploring and find someone who can
        guide your journey.
      </p>

      {/* Button - center */}
      <div className="flex justify-center w-full">
        <Button
          className="font-inter font-semibold text-[18px] leading-[150%] text-white"
          style={{
            width: "228px",
            height: "48px",
            padding: "10px 20px",
            borderRadius: "20px",
            background: "#3B82F6",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            opacity: 1,
          }}
        >
          Explore Mentors
        </Button>
      </div>
    </div>
  );
}
