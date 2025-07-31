// components/TrainingItem.tsx
import { Check } from "lucide-react";
import React from "react";

type Status = "completed" | "in-progress" | "todo";

interface TrainingItemProps {
  title: string;
  status: Status;
  note?: string;
  progress?: number;
}

export default function TrainingItem({
  title,
  status,
  note,
  progress,
}: TrainingItemProps) {
  const getCircleStyle = () => {
    if (status === "completed") {
      return {
        bg: "#A855F7",
        iconColor: "#FFFFFF",
      };
    }
    if (status === "in-progress") {
      return {
        bg: "#E0E7FF",
        iconColor: "#312E81",
      };
    }
    return {
      bg: "#FFFFFF",
      iconColor: "#D1D5DB",
    };
  };

  const circle = getCircleStyle();

  return (
    <div className="flex items-start gap-3">
      {/* Lingkaran Icon */}
      <div
        className="w-[50px] h-[50px] rounded-full flex items-center justify-center"
        style={{
          backgroundColor: circle.bg,
          border: status === "todo" ? "1px solid #D1D5DB" : "none",
          padding: "15px 9px",
        }}
      >
        {(status === "completed" || status === "in-progress") && (
          <Check size={28} color={circle.iconColor} />
        )}
      </div>

      {/* Text & Progress */}
      <div className="flex-1">
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

        {status === "in-progress" && progress !== undefined ? (
          <>
            <p
              className="font-inter font-normal"
              style={{
                fontSize: "18px",
                lineHeight: "150%",
                color: "#111827",
                width: "239px",
                height: "27px",
                opacity: 1,
              }}
            >
              In Progress ({progress}% completed)
            </p>
            <div
              className="bg-white/50 rounded overflow-hidden"
              style={{
                width: "493px",
                height: "13px",
              }}
            >
              <div
                className="h-full rounded"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(91.31deg, #3B82F6 27.23%, #818CF8 51.33%, #D8B4FE 75.42%)",
                }}
              />
            </div>
          </>
        ) : (
          <p
            className="font-inter font-normal"
            style={{
              fontSize: "18px",
              lineHeight: "150%",
              color: "#111827",
              width: "239px",
              height: "27px",
              opacity: 1,
            }}
          >
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
