import { useEffect, useRef, useState } from "react";
import { ChevronRight, Menu, Search, ShoppingBag, X } from "lucide-react";
import AppleLogo from "./AppleLogo.jsx";
import { NAV_ITEMS } from "../data/content.js";

function SearchField({ autoFocus = false, onClose }) {
  return (
    <form
      role="search"
      action="https://www.apple.com/us/search"
      className="relative w-full"
      onSubmit={() => onClose?.()}
    >
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40"
        strokeWidth={2}
      />
      <input
        type="search"
        name="q"
        autoFocus={autoFocus}
        placeholder="Search apple.com"
        aria-label="Search apple.com"
        className="h-11 w-full rounded-xl border border-black/10 bg-white pl-11 pr-4 text-[17px] text-ink shadow-sm outline-none placeholder:text-black/40 focus:border-apple-blue"
      />
    </form>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const searchPanelRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) menuRef.current.inert = !menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    if (searchPanelRef.current) searchPanelRef.current.inert = !searchOpen;
    if (!searchOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 735) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999]">
      <nav
        aria-label="Global"
        className="relative h-12 bg-[#f5f5f7]/80 text-ink backdrop-blur-md backdrop-saturate-150 tablet:h-11"
      >
        <div className="mx-auto flex h-full max-w-content items-center px-[22px]">
          <a
            href="https://www.apple.com/"
            aria-label="Apple"
            className="flex h-full shrink-0 items-center text-black/80 transition-opacity hover:text-black"
          >
            <AppleLogo className="h-12 w-[17px] tablet:h-11 tablet:w-[14px]" />
          </a>

          <ul className="ml-1 hidden h-full flex-1 items-center justify-between tablet:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="h-full">
                <a
                  href={item.href}
                  className="flex h-full items-center px-2 text-[12px] leading-none tracking-[-0.01em] text-black/80 transition-colors hover:text-black"
                >
                  {item.shortLabel ? (
                    <>
                      <span className="desktop:hidden">{item.shortLabel}</span>
                      <span className="hidden desktop:inline">{item.label}</span>
                    </>
                  ) : (
                    item.label
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto hidden h-full items-center gap-6 tablet:flex">
            <button
              type="button"
              aria-label="Search apple.com"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((value) => !value)}
              className="flex h-full items-center text-black/80 transition-colors hover:text-black"
            >
              {searchOpen ? (
                <X className="h-[15px] w-[15px]" strokeWidth={2.2} />
              ) : (
                <Search className="h-[15px] w-[15px]" strokeWidth={2.2} />
              )}
            </button>
            <a
              href="https://www.apple.com/us/shop/goto/bag"
              aria-label="Shopping Bag"
              className="flex h-full items-center text-black/80 transition-colors hover:text-black"
            >
              <ShoppingBag className="h-[15px] w-[15px]" strokeWidth={2.2} />
            </a>
          </div>

          <div className="ml-auto flex h-full items-center gap-6 tablet:hidden">
            <button
              type="button"
              aria-label="Search apple.com"
              onClick={() => {
                setMenuOpen(true);
                setSearchOpen(false);
              }}
              className="text-black/80"
            >
              <Search className="h-[17px] w-[17px]" strokeWidth={1.8} />
            </button>
            <a
              href="https://www.apple.com/us/shop/goto/bag"
              aria-label="Shopping Bag"
              className="text-black/80"
            >
              <ShoppingBag className="h-[17px] w-[17px]" strokeWidth={1.8} />
            </a>
            <button
              ref={toggleRef}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((value) => !value)}
              className="text-black/80"
            >
              {menuOpen ? (
                <X className="h-[19px] w-[19px]" strokeWidth={1.7} />
              ) : (
                <Menu className="h-[19px] w-[19px]" strokeWidth={1.7} />
              )}
            </button>
          </div>
        </div>

        <div
          ref={searchPanelRef}
          className={`absolute inset-x-0 top-full hidden overflow-hidden border-t border-black/[0.06] bg-[#f5f5f7]/95 backdrop-blur-xl transition-all duration-300 tablet:block ${
            searchOpen ? "max-h-32 opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto w-full max-w-[680px] px-6 py-5">
            <SearchField autoFocus={searchOpen} onClose={() => setSearchOpen(false)} />
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!menuOpen}
        className={`fixed inset-x-0 bottom-0 top-12 z-[9998] overflow-y-auto bg-[#f5f5f7] px-8 pb-16 pt-6 transition-all duration-300 tablet:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <SearchField onClose={() => setMenuOpen(false)} />
        <ul className="mt-6 border-t border-black/10">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="border-b border-black/10">
              <a
                href={item.href}
                className="flex items-center justify-between py-3 text-[17px] font-semibold tracking-[-0.01em] text-ink"
              >
                {item.label}
                <ChevronRight className="h-4 w-4 text-black/30" strokeWidth={2} />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[12px] text-black/[0.56]">
          More ways to shop:{" "}
          <a
            className="text-apple-link hover:underline"
            href="https://www.apple.com/retail/"
          >
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a
            className="text-apple-link hover:underline"
            href="https://www.apple.com/us/shop/goto/otherretailers"
          >
            other retailer
          </a>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>
      </div>
    </header>
  );
}



