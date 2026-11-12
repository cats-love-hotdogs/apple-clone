import { PROMOS } from "../data/content.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid() {
  return (
    <section
      aria-label="Featured products"
      className="grid grid-cols-1 gap-3 bg-white px-0 tablet:grid-cols-2 tablet:px-3 desktop:grid-cols-2 desktop:px-3"
    >
      {PROMOS.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
}
