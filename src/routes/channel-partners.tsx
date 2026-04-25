import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LogoMarquee } from "@/components/LogoMarquee";
import { channelPartners } from "@/data/company";

export const Route = createFileRoute("/channel-partners")({
  head: () => ({
    meta: [
      { title: "Channel Partners — Industrial Automation System Pvt. Ltd." },
      {
        name: "description",
        content:
          "Authorised channel partner & system integrator for Siemens, ABB, Allen Bradley, Schneider, Honeywell, Emerson, IFM, Rittal and other leading automation brands.",
      },
      { property: "og:title", content: "Channel Partners — IAS Groups" },
      {
        property: "og:description",
        content:
          "Authorised partner network of leading global automation OEMs.",
      },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <div className="min-h-dvh bg-steel-900 text-rubber flex flex-col">
      <SiteHeader />

      <section className="border-b border-steel-700 relative overflow-hidden cta-bg">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative max-w-[1440px] mx-auto px-6 py-16 lg:py-20">
          <div className="font-mono text-xs uppercase tracking-widest text-safety font-bold mb-4">
            // Authorized Network
          </div>
          <h1 className="font-display font-black text-4xl lg:text-5xl text-white uppercase tracking-tighter mb-4">
            Our Channel<br />
            <span className="text-safety">Partners.</span>
          </h1>
          <p className="text-base text-white/70 max-w-2xl leading-relaxed">
            We are authorised distributors and system integrators for the
            world's leading automation, electrical and process equipment OEMs —
            ensuring genuine products, factory warranty and certified support.
          </p>
        </div>
      </section>

      <section className="py-10 border-b border-steel-700 bg-white">
        <LogoMarquee items={channelPartners} />
      </section>

      <section className="max-w-[1440px] mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {channelPartners.map((p, i) => (
            <div
              key={p.name}
              className="bg-white border border-steel-700 hover:border-safety hover:shadow-soft transition-all p-6 rounded-md text-center group"
            >
              <div className="font-mono text-[10px] text-steel-500 uppercase tracking-widest mb-3">
                {String(i + 1).padStart(2, "0")} / {String(channelPartners.length).padStart(2, "0")}
              </div>
              <div className="size-16 mx-auto gradient-blue text-white font-display font-black flex items-center justify-center rounded-md text-xl mb-4 group-hover:scale-110 transition-transform">
                {p.name
                  .split(/\s|\+/)
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <div className="font-display font-black text-base text-rubber uppercase leading-tight mb-1 group-hover:text-safety">
                {p.name}
              </div>
              <div className="font-mono text-[10px] text-safety uppercase tracking-widest">
                {p.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
