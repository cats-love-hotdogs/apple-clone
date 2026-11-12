import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ENTERTAINMENT } from "../data/content.js";

export default function Entertainment() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]");
    const distance = (card?.offsetWidth ?? 320) + 16;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="entertainment-title"
      className="bg-white pb-10 pt-9 tablet:pb-12 tablet:pt-9 desktop:pb-16 desktop:pt-[53px]"
    >
      <h2
        id="entertainment-title"
        className="mb-4 text-center text-[32px] font-semibold leading-9 tracking-[0.064px] tablet:mb-4 desktop:mb-[26px] desktop:text-[56px] desktop:leading-[60px] desktop:tracking-[-0.28px]"
      >
        Endless entertainment.
      </h2>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 px-[calc((100vw-275px)/2)] tablet:px-[calc((100vw-688px)/2)] desktop:px-[calc((100vw-943px)/2)]"
      >
        {ENTERTAINMENT.map((show) => (
          <article
            key={show.title}
            data-card
            className="group relative h-[496px] w-[275px] shrink-0 snap-center overflow-hidden rounded-lg bg-black text-white tablet:h-[368px] tablet:w-[688px] desktop:h-[523px] desktop:w-[943px]"
          >
            <picture>
              <source media="(max-width: 734px)" srcSet={show.imageSm} />
              <img
                src={show.image}
                alt={show.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
            <img
              src="/assets/apple/logo-tv-plus.png"
              alt="Apple TV+"
              className="absolute left-5 top-5 h-auto w-[58px]"
            />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
              <span className="inline-flex h-9 items-center rounded-full bg-white/90 px-5 text-[13px] font-medium text-black backdrop-blur">
                Stream now
              </span>
              <p className="max-w-[300px] text-right text-[12px] leading-4 text-white/85">
                <span className="font-semibold text-white">{show.note}</span>{" "}
                <span className="line-clamp-3">{show.detail}</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous shows"
          onClick={() => scroll(-1)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.06] text-black/60 transition-colors hover:bg-black/10 hover:text-black"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={2.2} />
        </button>
        <button
          type="button"
          aria-label="Next shows"
          onClick={() => scroll(1)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.06] text-black/60 transition-colors hover:bg-black/10 hover:text-black"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
        </button>
      </div>
    </section>
  );
}
