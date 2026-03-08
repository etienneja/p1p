"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-white rounded-2xl p-6 md:p-8 shadow-sm",
        hover && "hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
