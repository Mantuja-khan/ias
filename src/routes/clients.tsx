import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LogoMarquee } from "@/components/LogoMarquee";
import { clients } from "@/data/company";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients — Industrial Automation System Pvt. Ltd." },
      {
        name: "description",
        content:
          "Trusted by India's leading manufacturers across automotive, steel, oil & gas, cement, dairy, FMCG and power sectors.",
      },
      { property: "og:title", content: "Our Clients — IAS Groups" },
      {
        property: "og:description",
        content:
          "Serving India's top manufacturers across heavy industry.",
      },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <div className="min-h-dvh bg-steel-900 text-rubber flex flex-col">
      <SiteHeader />

      <section className="border-b border-steel-700 relative overflow-hidden cta-bg">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative max-w-[1440px] mx-auto px-6 py-16 lg:py-20">
          <div className="font-mono text-xs uppercase tracking-widest text-safety font-bold mb-4">
            // Trusted By
          </div>
          <h1 className="font-display font-black text-4xl lg:text-5xl text-white uppercase tracking-tighter mb-4">
            Our<br />
            <span className="text-safety">Clients.</span>
          </h1>
          <p className="text-base text-white/70 max-w-2xl leading-relaxed">
            India's leading manufacturers and process plants depend on IAS for
            critical instrumentation, automation and electrical supply.
          </p>
        </div>
      </section>

      <section className="py-10 border-b border-steel-700 bg-white">
        <LogoMarquee items={clients.map((c) => ({ name: c.name, tag: c.sector, image: c.image }))} reverse />
      </section>

      <section className="max-w-[1440px] mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="bg-white border border-steel-700 hover:border-safety hover:shadow-soft transition-all p-4 rounded-md flex items-center justify-center h-[120px] group animate-fade-in"
            >
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.name}
                  className="max-h-[80px] max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="size-12 mx-auto gradient-blue text-white font-display font-black flex items-center justify-center rounded-md text-lg group-hover:scale-110 transition-transform">
                  {c.name
                    .split(/\s/)
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
