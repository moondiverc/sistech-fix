// components/MilestoneItem.tsx
import React from "react";
import { Check } from "lucide-react";

type MilestoneStatus = "completed" | "in-progress" | "todo";

interface MilestoneItemProps {
  title: string;
  status: MilestoneStatus;
  hasNext: boolean;
  isNextInProgress?: boolean;
  showButton?: boolean;
}

export default function MilestoneItem({
  title,
  status,
  hasNext,
  isNextInProgress = false,
  showButton = false,
}: MilestoneItemProps) {
  const getCircleColor = () => {
    if (status === "completed") return "#A855F7";
    if (status === "in-progress") return "#E0E7FF";
    return "#FFFFFF"; // ✅ Warna putih solid untuk todo
  };

  const getIconColor = () => {
    if (status === "completed") return "#FFFFFF";
    if (status === "in-progress") return "#312E81";
    return null; // ✅ Tidak render icon untuk todo
  };

  const statusText =
    status === "completed"
      ? "Completed"
      : status === "in-progress"
      ? "In Progress"
      : "To do";

  const isDisabled = status === "todo";

  return (
    <div className="flex gap-3 relative">
      {/* Icon + Line Container */}
      <div className="flex flex-col items-center relative">
        {/* Garis sambungan */}
        {hasNext && (
          <div
            className="absolute top-[50px] w-[5px] z-0"
            style={{
              height: isNextInProgress ? "70px" : "56px",
              background: isNextInProgress
                ? "linear-gradient(360deg, #E0E7FF 36.32%, #9EA2AE 51.42%)"
                : "#A855F7",
            }}
          />
        )}

        {/* Lingkaran Icon */}
        <div
          className="w-[50px] h-[50px] rounded-full z-10 flex items-center justify-center"
          style={{
            backgroundColor: getCircleColor(),
            padding: "15px 9px",
            border: isDisabled ? "1px solid #D1D5DB" : "none",
            opacity: 1, // ✅ selalu solid
          }}
        >
          {(status === "completed" || status === "in-progress") &&
            getIconColor() && <Check size={28} color={getIconColor()!} />}
        </div>
      </div>

      {/* Text & Button */}
      <div className={`flex-1 ${isDisabled ? "opacity-50" : ""}`}>
        <p
          className="font-inter font-semibold text-[20px] leading-[150%] whitespace-nowrap overflow-hidden text-ellipsis"
          style={{
            color: "#111827",
            width: "100%", // biarkan fleksibel sesuai container
            maxWidth: "493px", // batasi maksimal sesuai lebar progress bar
            height: "30px",
            opacity: 1,
          }}
        >
          {title}
        </p>

        <p
          className="text-sm text-gray-600"
          style={{
            fontSize: "18px",
            lineHeight: "150%",
            color: "#111827",
            width: "239px",
            height: "27px",
            opacity: 1,
          }}
        >
          {statusText}
        </p>
      </div>

      {showButton && (
        <button
          className="mt-10 mx-auto block font-inter font-semibold text-[18px] leading-[150%] text-white"
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
          Continue
        </button>
      )}
    </div>
  );
}
