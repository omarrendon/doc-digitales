"use client";

import React from "react";
import { motion } from "motion/react";

interface ICardProps {
  title: string;
  icon?: React.ReactNode;
}
export const CardContent: React.FC<ICardProps> = ({ icon, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
      }}
    >
      <div
        className="card bg-white border-1 border-gray-300 shadow-lg rounded-xl p-6 transition-all duration-800 ease-in-out
                    group-hover:scale-75 hover:scale-110 hover:col-span-1 hover:border-blue-500 hover:min-w-2xs flex flex-col items-center justify-center hover:cursor-pointer "
      >
        <span>{icon}</span>
        <h2 className="font-medium text-center mt-6">{title}</h2>
      </div>
    </motion.div>
  );
};
