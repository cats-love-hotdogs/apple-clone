import { ChevronDown } from "lucide-react";
import {
  FOOTER_COLUMNS,
  FOOTER_NOTES,
  LEGAL_LINKS,
} from "../data/content.js";

const linkClass =
  "inline-block py-[3px] text-[12px] leading-4 text-black/[0.72] transition-colors hover:text-black hover:underline";

function SectionList({ section }) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="mb-2 text-[12px] font-normal leading-4 text-black/[0.88]">
        {section.title}
      </h3>
      <ul>
        {section.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={linkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileAccordion() {
  const sections = FOOTER_COLUMNS.flat();

  return (
    <nav aria-label="Footer" className="tablet:hidden">
      {sections.map((section) => (
        <details
          key={section.title}
          className="group border-b border-black/10 [&::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-[12px] leading-4 text-black/[0.88] [&::-webkit-details-marker]:hidden">
            {section.title}
            <ChevronDown
              className="h-3.5 w-3.5 text-black/40 transition-transform duration-200 group-open:rotate-180"
              strokeWidth={2}
            />
          </summary>
          <ul className="pb-3 pt-1">
            {section.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </nav>
  );
}

function DesktopDirectory() {
  return (
    <nav aria-label="Footer" className="hidden tablet:flex tablet:gap-0 tablet:pt-5">
      {FOOTER_COLUMNS.map((column, index) => (
        <div key={index} className="min-w-0 flex-1 pr-5">
          {column.map((section) => (
            <SectionList key={section.title} section={section} />
          ))}
        </div>
      ))}
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="bg-mist text-[12px] leading-4 text-black/[0.56]">
      <div className="mx-auto max-w-footer px-4 pb-6 tablet:px-6">
        <div className="border-b border-black/10 py-4">
          <ul className="space-y-2">
            {FOOTER_NOTES.map((note) => (
              <li key={note} className="text-[12px] leading-4">
                {note}
              </li>
            ))}
          </ul>
        </div>

        <MobileAccordion />
        <DesktopDirectory />

        <div className="border-b border-black/10 py-4 text-[12px] leading-4 text-black/[0.72]">
          More ways to shop:{" "}
          <a
            href="https://www.apple.com/retail/"
            className="text-apple-link underline hover:text-black"
          >
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a
            href="https://www.apple.com/us/shop/goto/otherretailers"
            className="text-apple-link underline hover:text-black"
          >
            other retailer
          </a>{" "}
          near you. Or call{" "}
          <a href="tel:18006927753" className="text-apple-link underline hover:text-black">
            1-800-MY-APPLE
          </a>{" "}
          (1-800-692-7753).
        </div>

        <div className="flex flex-col gap-3 py-4 tablet:flex-row tablet:items-center tablet:justify-between">
          <div className="flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-6">
            <p className="text-[12px] text-black/[0.56]">
              Copyright © 2026 Apple Inc. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[12px] text-black/[0.56] hover:text-black hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://www.apple.com/choose-country-region/"
            className="whitespace-nowrap text-[12px] text-black/[0.72] hover:text-black hover:underline"
          >
            United States
          </a>
        </div>
      </div>
    </footer>
  );
}

