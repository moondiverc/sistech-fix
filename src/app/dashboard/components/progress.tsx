// src/components/ui/progress.tsx
import * as React from "react";

export function Progress({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className={`relative w-full h-2 bg-gray-200 rounded ${className}`}>
      <div
        className="absolute h-full bg-purple-500 rounded"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
