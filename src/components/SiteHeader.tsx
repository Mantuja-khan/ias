import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { categories, products } from "@/data/products";
import { COMPANY } from "@/data/company";

const mainNav: Array<{ to: "/" | "/services" | "/clients" | "/channel-partners" | "/contact"; label: string }> = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/channel-partners", label: "Channel Partners" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof products>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 1) {
      const filtered = products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.sku.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 6);
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <header className="bg-white border-b border-steel-700 sticky top-0 z-50 shadow-sm">
        {/* Full-width search bar overlay inside the header */}
        {isSearchOpen && (
          <div className="absolute inset-0 bg-white z-[60] flex items-center px-4 sm:px-6 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="max-w-[1440px] mx-auto w-full flex items-center gap-4">
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search products, SKUs..."
                className="flex-1 bg-steel-900 border border-steel-700 text-rubber px-4 py-2.5 font-sans text-sm rounded-md focus:outline-none focus:border-safety transition-colors"
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                  setSearchResults([]);
                }}
                className="size-11 flex items-center justify-center text-rubber hover:text-safety transition-colors font-display font-black text-xl"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="size-11 gradient-blue flex items-center justify-center text-white font-display font-black text-lg rounded-md shadow-soft">
              IAS
            </div>
            <div className="leading-tight">
              <div className="font-display font-black text-sm sm:text-base lg:text-lg text-rubber uppercase tracking-tight">
                Industrial Automation
              </div>
              <div className="font-sans text-[8px] sm:text-[10px] uppercase tracking-widest text-safety">
                System Pvt. Ltd.
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden md:flex items-center gap-1 font-display font-bold uppercase tracking-wide text-xs lg:text-sm">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-safety" }}
              className="px-3 py-2 text-rubber hover:text-safety transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              to="/products"
              activeProps={{ className: "text-safety" }}
              className="px-3 py-2 text-rubber hover:text-safety transition-colors whitespace-nowrap"
            >
              Products
            </Link>
            {mainNav.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-safety" }}
                className="px-3 py-2 text-rubber hover:text-safety transition-colors whitespace-nowrap"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Trigger Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="size-10 flex items-center justify-center text-rubber hover:text-safety border border-steel-700 hover:border-safety rounded-md transition-colors"
              aria-label="Search products"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Quote Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-safety text-white font-display font-bold text-xs px-5 py-2.5 rounded-md hover:bg-[color:var(--safety-deep)] transition-colors uppercase tracking-wide whitespace-nowrap"
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden size-10 flex flex-col items-center justify-center gap-1.5 text-rubber hover:text-safety border border-steel-700 hover:border-safety rounded-md transition-all"
            >
              <span className={`w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Live search results overlay (Absolute) */}
        {searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 mx-4 bg-white border border-steel-700 shadow-2xl z-[70] rounded-md overflow-hidden animate-in fade-in slide-in-from-top-2">
            <div className="bg-steel-900 px-4 py-2 border-b border-steel-700 text-[10px] font-sans text-steel-500 uppercase tracking-widest flex justify-between">
              <span>Found {searchResults.length} Products</span>
              <button onClick={() => setSearchResults([])} className="hover:text-safety font-black">
                ✕
              </button>
            </div>
            {searchResults.map((p) => (
              <Link
                key={p.id}
                to="/product/$id"
                params={{ id: p.id }}
                onClick={() => {
                  setSearchQuery("");
                  setSearchResults([]);
                  setIsSearchOpen(false);
                }}
                className="flex items-center gap-4 p-3 hover:bg-steel-900 border-b border-steel-700 last:border-b-0 group"
              >
                <div className="size-12 bg-steel-900 rounded border border-steel-700 overflow-hidden shrink-0">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover transition-all"
                    alt={p.name}
                  />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="font-display font-black text-sm text-rubber group-hover:text-safety truncate uppercase">
                    {p.name}
                  </div>
                  <div className="font-sans text-[10px] text-safety uppercase mt-0.5">
                    {p.sku} · {p.group}
                  </div>
                </div>
                <div className="font-display font-black text-sm text-safety">₹{p.price}</div>
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Navbar Links Overlay */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-steel-700 bg-steel-900 ${isMenuOpen ? "max-h-[500px] py-4" : "max-h-0"}`}>
          <div className="flex flex-col px-4 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-rubber hover:text-safety font-display font-bold text-sm uppercase tracking-widest border-l-2 border-transparent transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-rubber hover:text-safety font-display font-bold text-sm uppercase tracking-widest border-l-2 border-transparent transition-colors"
            >
              Products
            </Link>
            {mainNav.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-rubber hover:text-safety font-display font-bold text-sm uppercase tracking-widest border-l-2 border-transparent transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 mx-4 bg-safety text-white text-center font-display font-bold text-sm py-4 rounded-md uppercase tracking-widest"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
