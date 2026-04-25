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
  // Group clients by sector for a structured view
  const bySector = clients.reduce<Record<string, typeof clients>>((acc, c) => {
    (acc[c.sector] = acc[c.sector] || []).push(c);
    return acc;
  }, {});

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
        <LogoMarquee items={clients.map((c) => ({ name: c.name, tag: c.sector }))} reverse />
      </section>

      <section className="max-w-[1440px] mx-auto px-6 py-16 w-full">
        <div className="flex items-end justify-between border-b-2 border-safety/30 pb-3 mb-8">
          <h2 className="font-display font-black text-2xl lg:text-3xl text-rubber uppercase tracking-tighter">
            Authorized Network
          </h2>
          <span className="font-sans text-xs text-steel-500 uppercase tracking-widest font-bold">
            {clients.length} Total Clients
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {clients.map((c) => (
            <div
              key={c.name}
              className="bg-white border border-steel-700 hover:border-safety hover:shadow-soft transition-all p-5 rounded-lg flex items-center gap-4 group"
            >
              <div className="size-11 shrink-0 bg-steel-900 border border-steel-700 text-safety group-hover:bg-safety group-hover:text-white font-display font-black flex items-center justify-center rounded-md text-base transition-colors">
                {c.name
                  .split(/\s/)
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <div>
                <div className="font-display font-black text-sm text-rubber uppercase leading-tight group-hover:text-safety transition-colors">
                  {c.name}
                </div>
                <div className="font-sans text-[9px] text-steel-500 uppercase tracking-widest mt-1">
                  {c.sector}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
