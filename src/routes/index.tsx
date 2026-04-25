import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { LogoMarquee } from "@/components/LogoMarquee";
import { categories, products } from "@/data/products";
import { channelPartners, clients, COMPANY } from "@/data/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Industrial Automation System Pvt. Ltd. — IAS Groups" },
      {
        name: "description",
        content:
          "Authorised supplier of industrial instrumentation, electrical and mechanical equipment. PLC, SCADA, drives, valves, pumps & turnkey automation services across India.",
      },
      { property: "og:title", content: "Industrial Automation System Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "Industrial instrumentation, electrical and mechanical equipment + automation services across India.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 5);

  return (
    <div className="min-h-dvh bg-steel-900 text-rubber flex flex-col">
      <SiteHeader />

      {/* HERO - NO IMAGES, CENTERED CONTENT */}
      <section className="relative border-b border-steel-700 overflow-hidden cta-bg">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute -top-32 -right-32 size-[500px] rounded-full gradient-blue opacity-10 blur-3xl" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-safety text-safety font-sans font-bold text-[10px] sm:text-xs px-4 py-2 mb-8 uppercase tracking-widest rounded-full shadow-sm">
              <span className="size-2 bg-safety rounded-full animate-pulse" />
              ISO 9001:2015 · Pan-India Delivery
            </div>
            <h1 className="font-display font-black text-white uppercase leading-[0.9] tracking-tighter mb-8 text-4xl sm:text-6xl lg:text-7xl">
              Industrial Automation,<br />
              <span className="text-safety">Engineered for Scale.</span>
            </h1>
            <p className="font-sans text-white/80 mx-auto max-w-[65ch] text-base lg:text-lg mb-12 leading-relaxed">
              Single-source supply for instrumentation, electrical and
              mechanical equipment — backed by an in-house engineering team
              for panel design, PLC/SCADA, and turnkey commissioning.
            </p>
            <div className="flex flex-row justify-center gap-3 sm:gap-6">
              <Link
                to="/products"
                className="gradient-blue text-white font-display font-black text-[10px] sm:text-base lg:text-xl uppercase px-4 sm:px-10 py-4 rounded-md shadow-soft hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Browse Products
              </Link>
              <Link
                to="/contact"
                className="bg-white text-rubber border border-steel-600 font-display font-black text-[10px] sm:text-base lg:text-xl uppercase px-4 sm:px-10 py-4 rounded-md hover:border-safety hover:text-safety transition-colors whitespace-nowrap"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-20 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-steel-700 pb-6">
          <div>
            <div className="font-sans text-xs text-safety uppercase tracking-widest font-bold mb-2">
              [01] Product Categories
            </div>
            <h2 className="font-display font-black text-3xl lg:text-4xl text-rubber uppercase tracking-tighter">
              Browse Catalog
            </h2>
          </div>
          <p className="font-sans text-sm text-steel-500 max-w-md">
            Three core categories. Hundreds of SKUs. Every part field-tested.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              to="/category/$slug"
              params={{ slug: cat.slug }}
              className="group relative block bg-white border border-black p-8 lg:p-10 hover:border-safety hover:shadow-soft transition-all rounded-lg overflow-hidden"
            >
              <div className="absolute top-0 right-0 size-14 gradient-blue text-white flex items-center justify-center font-display font-black text-2xl">
                +
              </div>
              <div className="font-sans text-xs text-steel-500 uppercase tracking-widest mb-4">
                0{i + 1} / {String(cat.groups.flatMap((g) => g.items).length).padStart(2, "0")} SKUs
              </div>
              <h3 className="font-display font-black text-2xl lg:text-3xl text-rubber uppercase tracking-tighter mb-4 group-hover:text-safety">
                {cat.name}
              </h3>
              <p className="font-sans text-xs text-safety uppercase tracking-widest font-bold mb-6">
                {cat.tagline}
              </p>
              <p className="text-sm text-steel-500 leading-relaxed mb-8">
                {cat.description}
              </p>
              <div className="h-1 w-16 gradient-blue group-hover:w-full transition-all duration-300 ease-out rounded-full" />
            </Link>
          ))}
        </div>
      </section>

      {/* CHANNEL PARTNERS MARQUEE */}
      <section className="bg-white border-y border-steel-700 py-12">
        <div className="max-w-[1440px] mx-auto px-6 mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="font-sans text-xs text-safety uppercase tracking-widest font-bold mb-2">
              [02] Authorised Network
            </div>
            <h2 className="font-display font-black text-2xl lg:text-3xl text-rubber uppercase tracking-tighter">
              Channel Partners
            </h2>
          </div>
          <Link
            to="/channel-partners"
            className="text-safety font-sans font-bold text-sm hover:underline uppercase tracking-widest whitespace-nowrap"
          >
            View More Partners →
          </Link>
        </div>
        <LogoMarquee items={channelPartners} />
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="gradient-soft-blue border-b border-steel-700 py-12">
        <div className="max-w-[1440px] mx-auto px-6 mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="font-sans text-xs text-safety uppercase tracking-widest font-bold mb-2">
              [03] Trusted By
            </div>
            <h2 className="font-display font-black text-2xl lg:text-3xl text-rubber uppercase tracking-tighter">
              Our Clients
            </h2>
          </div>
          <Link
            to="/clients"
            className="text-rubber font-sans font-bold text-sm hover:underline uppercase tracking-widest whitespace-nowrap"
          >
            View More Clients →
          </Link>
        </div>
        <LogoMarquee items={clients.map((c) => ({ name: c.name, tag: c.sector }))} reverse speed="slow" />
      </section>

      {/* INDUSTRIES WE DEALS IN */}
      <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-20 w-full overflow-hidden">
        <div className="flex flex-col mb-12 border-b border-steel-700 pb-6">
          <div className="font-sans text-xs text-safety uppercase tracking-widest font-bold mb-2 text-left">
            [04] Market Verticals
          </div>
          <h2 className="font-display font-black text-3xl lg:text-4xl text-rubber uppercase tracking-tighter text-left">
            Industries We Deals In
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              name: "Chemical Industry",
              image: "https://i.pinimg.com/736x/2a/f1/9b/2af19b21c4c10cb91803d5f83dc839b8.jpg",
            },
            {
              name: "Pharmaceutical Industry",
              image: "https://i.pinimg.com/1200x/80/e5/df/80e5df94c2c611c566909ad629a86cd8.jpg",
            },
            {
              name: "Beverages and Brewery Industry",
              image: "https://i.pinimg.com/1200x/df/a8/8b/dfa88bb5e2462c3a2035dbdb228f86dc.jpg",
            },
            {
              name: "Automobile Industry",
              image: "https://i.pinimg.com/736x/9c/bc/50/9cbc509fd7ccf4025937b00425ec53cc.jpg",
            },
            {
              name: "Sugar mill",
              image: "https://i.pinimg.com/1200x/ab/fe/33/abfe33802275483cf48f2e09bc09962c.jpg",
            },
            {
              name: "Distilleries and Refinery",
              image: "https://i.pinimg.com/736x/7d/79/bb/7d79bb1869db987560b4dfc7831778bf.jpg",
            },
            {
              name: "Fertilizer and pesticides Industry",
              image: "https://i.pinimg.com/736x/f1/2f/e4/f12fe4fe494efb2c9d30dbe677988e29.jpg",
            },
            {
              name: "Pulp and paper industry",
              image: "https://i.pinimg.com/1200x/9d/60/e2/9d60e2d5473885597604ec02f9d11b45.jpg",
            },
            {
              name: "Textile industry",
              image: "https://i.pinimg.com/736x/38/4e/d7/384ed71a177233dc7c10f34728cf25a2.jpg",
            },
            {
              name: "Food and Processing Industry",
              image: "https://i.pinimg.com/736x/d4/5a/06/d45a06642df160a116ccfe9af8c42eb8.jpg",
            },
          ].map((ind, i) => (
            <div
              key={ind.name}
              className="group relative h-[180px] sm:h-[240px] rounded-lg overflow-hidden border border-black shadow-soft"
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rubber/90 via-rubber/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="font-sans text-[8px] sm:text-[10px] text-safety uppercase tracking-widest font-bold mb-1 opacity-80">
                  Sector {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-black text-sm sm:text-xl lg:text-2xl text-white uppercase tracking-tight group-hover:text-safety transition-colors">
                  {ind.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-20 w-full">
        <div className="flex justify-between items-end mb-12 border-b border-steel-700 pb-6">
          <div>
            <div className="font-sans text-xs text-safety uppercase tracking-widest font-bold mb-2 text-left">
              [05] Best Sellers
            </div>
            <h2 className="font-display font-black text-3xl lg:text-4xl text-rubber uppercase tracking-tighter text-left">
              Top Spec
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden sm:flex font-sans text-xs font-bold text-safety hover:text-rubber uppercase tracking-widest items-center gap-2"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1440px] mx-auto px-6 pb-16 w-full">
        <div className="cta-bg text-white p-10 lg:p-14 rounded-lg shadow-soft flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h2 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tighter mb-2">
              Procurement made simple.
            </h2>
            <p className="text-white/85 max-w-xl">
              Send us your BOQ or RFQ — get a technical quote within 48 hours
              with genuine OEM pricing & lead times.
            </p>
            <p className="mt-4 font-sans text-sm text-white/80">
              📞 {COMPANY.phones[0]} &nbsp;·&nbsp; ✉ {COMPANY.emails[0]}
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-white text-safety font-display font-black text-lg uppercase px-8 py-4 rounded-md hover:bg-steel-900 transition-colors whitespace-nowrap"
          >
            Get a Quote →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
