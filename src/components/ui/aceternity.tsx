import React from "react";

interface AceternityBadgeProps {
  message: string;
  className?: string;
}

export const AceternityBadge: React.FC<AceternityBadgeProps> = ({ message, className }) => {
  return (
    <div className={`p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold ${className}`}>
      {message}
    </div>
  );
};
