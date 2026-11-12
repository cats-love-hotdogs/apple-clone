import Navbar from "./components/Navbar.jsx";
import Ribbon from "./components/Ribbon.jsx";
import HeroItem from "./components/HeroItem.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Entertainment from "./components/Entertainment.jsx";
import Footer from "./components/Footer.jsx";
import { HEROES } from "./data/content.js";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-12 tablet:pt-11">
        <Ribbon />

        <div className="space-y-3 bg-white">
          {HEROES.map((hero, index) => (
            <HeroItem key={hero.id} item={hero} priority={index === 0} />
          ))}
        </div>

        <div className="mt-3">
          <ProductGrid />
        </div>

        <Entertainment />
      </main>

      <Footer />
    </div>
  );
}
