import Button from "./Button.jsx";
import TileImage from "./TileImage.jsx";

const heightClasses = "h-[500px] tablet:h-[490px] desktop:h-[580px]";

const titleClasses =
  "text-[32px] font-semibold leading-9 tracking-[0.064px] tablet:text-[32px] tablet:leading-9 tablet:tracking-[0.064px] desktop:text-[40px] desktop:leading-[44px] desktop:tracking-normal";

const subtitleClasses =
  "mt-[3px] text-[19px] leading-[23px] tracking-[0.231px] tablet:text-[19px] tablet:leading-[23px] desktop:text-[21px] desktop:leading-[25px]";

function Logo({ item }) {
  return (
    <img
      src={item.logoSrc}
      alt={item.logoAlt}
      width={item.logoWidth}
      loading="lazy"
      className="h-auto max-w-[232px] select-none object-contain"
      style={{ width: item.logoWidth }}
    />
  );
}

export default function ProductCard({ item }) {
  const dark = item.theme === "dark";

  return (
    <section
      aria-label={item.logoAlt ?? item.title}
      className={`group relative isolate overflow-hidden ${heightClasses} ${
        dark ? "text-mist" : "text-ink"
      }`}
      style={{ backgroundColor: item.background }}
    >
      <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.012]">
        <TileImage
          images={item.images}
          alt={`${item.logoAlt ?? item.title} — Apple`}
          position="50% 50%"
        />
      </div>

      {item.split ? (
        <div className="relative z-10 flex h-full flex-col items-center justify-between px-8 pb-10 pt-10 text-center tablet:pb-[44px] tablet:pt-[44px] desktop:pb-[53px] desktop:pt-[53px]">
          <div className="shrink-0">
            <Logo item={item} />
          </div>
          <div className="mt-4 flex w-full max-w-[245px] flex-col items-center desktop:max-w-[330px]">
            <p className={subtitleClasses}>{item.subtitle}</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-[17px]">
              {item.ctas.map((cta) => (
                <Button key={cta.label} href={cta.href} variant={cta.variant}>
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex h-full flex-col items-center px-8 pt-10 text-center tablet:pt-[44px] desktop:pt-[53px]">
          <div className="max-w-[320px] desktop:max-w-[360px]">
            {item.logoSrc ? (
              <div className="flex justify-center">
                <Logo item={item} />
              </div>
            ) : (
              <h3 className={titleClasses}>{item.title}</h3>
            )}
            <p className={subtitleClasses}>{item.subtitle}</p>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-[17px]">
            {item.ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
