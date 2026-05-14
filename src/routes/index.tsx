import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { LogoMarquee } from "@/components/LogoMarquee";
import { categories, products } from "@/data/products";
import { channelPartners, clients, COMPANY } from "@/data/company";
import { services } from "@/data/services";

import mechenicalImg from "@/assets/mechenical.png";
import electricalImg from "@/assets/electrical.png";
import instrumentationImg from "@/assets/instrumentation.png";

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
  const heroImages = [
    { src: instrumentationImg, alt: "Instrumentation" },
    { src: electricalImg, alt: "Electrical" },
    { src: mechenicalImg, alt: "Mechanical" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragTranslate = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragTranslate.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    dragTranslate.current = e.clientX - dragStartX.current;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragTranslate.current < -50) {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    } else if (dragTranslate.current > 50) {
      setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartX.current = e.touches[0].clientX;
    dragTranslate.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    dragTranslate.current = e.touches[0].clientX - dragStartX.current;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragTranslate.current < -50) {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    } else if (dragTranslate.current > 50) {
      setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }
  };

  return (
    <div className="min-h-dvh bg-steel-900 text-rubber flex flex-col">
      <SiteHeader />

      {/* HERO SLIDER */}
      <section 
        className="relative border-b border-steel-700 overflow-hidden select-none cursor-grab active:cursor-grabbing bg-steel-950 flex items-center justify-center w-full"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full relative overflow-hidden">
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {heroImages.map((img, idx) => (
              <div key={idx} className="w-full shrink-0">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto pointer-events-none" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators / Navigation dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`size-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-safety w-6" : "bg-white/40 hover:bg-white"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-20 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-steel-700 pb-6">
          <div>
            <div className="font-sans text-xs text-safety uppercase tracking-widest font-bold mb-2">
              Product Categories
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-rubber uppercase tracking-tighter">
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
                0{i + 1} / {String(products.filter((p) => p.category === cat.slug).length).padStart(2, "0")} SKUs
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

      {/* FEATURED SERVICES */}
      <section className="bg-steel-950 py-16 lg:py-20 border-y border-steel-700">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-steel-700 pb-6">
            <div>
              <div className="font-sans text-xs text-safety uppercase tracking-widest font-bold mb-2">
                Featured Services
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tighter">
                Engineering & Repair Services
              </h2>
            </div>
            <Link
              to="/services"
              className="bg-safety text-white font-sans font-bold text-xs px-5 py-3 rounded-md hover:opacity-90 uppercase tracking-widest whitespace-nowrap inline-block"
            >
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((s) => (
              <div
                key={s.no}
                className="group bg-white border border-steel-700 hover:border-safety hover:shadow-soft transition-all p-4 rounded-md flex flex-col justify-between animate-fade-in"
              >
                <div>
                  <div className="aspect-[3/2] rounded border border-steel-700 overflow-hidden mb-4 relative bg-steel-950">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="font-mono text-[10px] text-safety uppercase tracking-widest font-bold">
                      Service / {s.no}
                    </div>
                    <div className="size-8 gradient-blue text-white font-display font-black flex items-center justify-center rounded text-xs">
                      {s.no}
                    </div>
                  </div>
                  <h3 className="font-display font-black text-base text-rubber uppercase leading-tight mb-2 group-hover:text-safety min-h-[2.5rem] line-clamp-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-steel-500 leading-relaxed line-clamp-3">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNEL PARTNERS MARQUEE */}
      <section className="bg-white border-b border-steel-700 py-12">
        <div className="max-w-[1440px] mx-auto px-6 mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="font-sans text-xs text-safety uppercase tracking-widest font-bold mb-2">
              Authorised Network
            </div>
            <h2 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-rubber uppercase tracking-tighter">
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
              Trusted By
            </div>
            <h2 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-rubber uppercase tracking-tighter">
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
        <LogoMarquee items={clients.map((c) => ({ name: c.name, tag: c.sector, image: c.image }))} reverse speed="slow" />
      </section>

      {/* INDUSTRIES WE DEALS IN */}
      <section className="max-w-[1440px] mx-auto px-6 py-16 lg:py-20 w-full overflow-hidden">
        <div className="flex flex-col mb-12 border-b border-steel-700 pb-6">
          <div className="font-sans text-xs text-safety uppercase tracking-widest font-bold mb-2 text-left">
            Market Verticals
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-rubber uppercase tracking-tighter text-left">
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


      {/* CTA */}
      {/* CTA */}
      <section 
        className="text-white relative border-t border-steel-700 py-16 lg:py-24 w-full bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.pinimg.com/736x/35/b6/67/35b667a4082809c4af5fe38a7e035b52.jpg')" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter mb-4">
              Procurement made simple.
            </h2>
            <p className="text-white/90 max-w-2xl text-base md:text-lg font-sans leading-relaxed">
              Send us your BOQ or RFQ — get a technical quote within 48 hours
              with genuine OEM pricing & lead times.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-safety text-white font-display font-black text-xl uppercase px-10 py-5 rounded-md hover:bg-[color:var(--safety-deep)] shadow-soft transition-all hover:scale-105 whitespace-nowrap shrink-0"
          >
            Get a Quote →
          </Link>
        </div>
        {/* Overlay for extra pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 pointer-events-none" />
      </section>

      <SiteFooter />
    </div>
  );
}
