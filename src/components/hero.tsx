"use client";

import { useMemo, useState } from "react";

import Countdown from "./countdown";
import People from "./people";
import { Logo } from "./svgs";
import Form from "./form";

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-6 mb-6">
        <div className="flex items-center gap-4 rounded-full border border-border px-4 py-1 relative">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#87efac] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#87efac]" />
          </span>
          <p className="uppercase text-sm font-medium">
            launching in early {year}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 max-w-2xl">
        <h2 className="text-4xl text-center font-bold text-foreground">
          {isSuccess ? "You're on the waitlist" : "Join Our Mentor Waitlist"}
        </h2>
        <p className="text-base text-muted-foreground text-center max-w-md">
          {isSuccess
            ? "You've successfully secured your spot. We'll notify you as soon as the platform launches and you can start helping students achieve their study abroad dreams."
            : "Be among the first mentors to help students from around the world get into top universities like Harvard, Oxford, and Boston University. Join our exclusive waitlist for early access and special benefits."}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-full max-w-md">
        <Form onSuccessChange={setIsSuccess} />
      </div>
      <div className="flex items-center justify-center gap-2">
        <People count={waitlistPeople} />
      </div>
      <Countdown period={new Date("2026-01-31")} />
    </div>
  );
}
