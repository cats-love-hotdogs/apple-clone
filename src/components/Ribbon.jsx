import { ChevronRight } from "lucide-react";
import { RIBBON } from "../data/content.js";

export default function Ribbon() {
  return (
    <section
      aria-label="Announcement"
      className="flex min-h-[52px] items-center justify-center bg-white px-6 py-3 text-center"
    >
      <p className="text-[14px] leading-5 text-ink">
        {RIBBON.text}{" "}
        <a
          href={RIBBON.href}
          className="inline-flex items-center whitespace-nowrap text-apple-link hover:underline"
        >
          {RIBBON.linkLabel}
          <ChevronRight className="ml-0.5 h-3.5 w-3.5" strokeWidth={2.2} />
        </a>
      </p>
    </section>
  );
}
