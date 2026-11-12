import Button from "./Button.jsx";
import TileImage from "./TileImage.jsx";

const heightClasses = "h-[500px] tablet:h-[650px] desktop:h-[692px]";

export default function HeroItem({ item, priority = false }) {
  const dark = item.theme === "dark";

  return (
    <section
      aria-label={item.title}
      className={`relative isolate w-full overflow-hidden ${heightClasses} ${
        dark ? "text-mist" : "text-ink"
      }`}
      style={{ backgroundColor: item.background }}
    >
      <TileImage
        images={item.images}
        alt={`${item.title} — Apple`}
        priority={priority}
        position={item.imagePosition ?? "50% 30%"}
      />

      <div
        className={`relative z-10 flex h-full flex-col items-center px-8 text-center tablet:px-10 desktop:px-12 ${
          item.align === "bottom"
            ? "justify-end pb-10 tablet:pb-[61px] desktop:pb-14"
            : "justify-start pt-10 tablet:pt-[61px] desktop:pt-14"
        }`}
      >
        <div className="max-w-[720px]">
          <h2 className="text-[32px] font-semibold leading-9 tracking-[0.064px] tablet:text-[48px] tablet:leading-[52px] tablet:tracking-[-0.096px] desktop:text-[56px] desktop:leading-[60px] desktop:tracking-[-0.28px]">
            {item.title}
          </h2>
          <p
            className={`mt-1.5 text-[19px] font-normal leading-[23px] tablet:text-[24px] tablet:leading-7 desktop:text-[28px] desktop:leading-8 ${
              item.subtitleClassName ?? ""
            }`}
          >
            {item.subtitle}
          </p>
        </div>

        <div className="mt-[17px] flex flex-wrap items-center justify-center gap-[17px]">
          {item.ctas.map((cta) => (
            <Button key={cta.label} href={cta.href} variant={cta.variant}>
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
