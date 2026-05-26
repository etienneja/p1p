"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { EventReservation } from "@/data/events";
import { cn } from "@/lib/utils";

interface EventReservationCtaProps {
  reservation: EventReservation;
  theme?: "dark" | "light";
}

export function EventReservationCta({
  reservation,
  theme = "light",
}: EventReservationCtaProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsOpen(Date.now() >= new Date(reservation.salesOpenISO).getTime());
    check();
    const timer = setInterval(check, 1000);
    return () => clearInterval(timer);
  }, [reservation.salesOpenISO]);

  const isDark = theme === "dark";

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      {isOpen ? (
        <Button
          href={reservation.ctaUrl}
          size="lg"
          external
          variant="secondary"
          className={cn("transition-all duration-300", isDark && "shadow-lg shadow-soleil/40")}
        >
          {reservation.ctaLabel}
        </Button>
      ) : (
        <span
          className={cn(
            "inline-flex items-center justify-center px-8 py-4 text-lg rounded-full font-semibold cursor-not-allowed transition-colors duration-300",
            isDark ? "bg-white/20 text-white/60" : "bg-sable text-encre-light"
          )}
          aria-disabled="true"
        >
          {reservation.ctaLabel}
        </span>
      )}
      {!isOpen && (
        <p
          className={cn(
            "text-center text-lg md:text-xl font-bold leading-snug max-w-md",
            isDark
              ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              : "text-encre"
          )}
        >
          {reservation.openingNotice}
        </p>
      )}
    </div>
  );
}
