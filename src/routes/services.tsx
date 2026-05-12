import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Industrial Automation System Pvt. Ltd." },
      {
        name: "description",
        content:
          "End-to-end industrial automation services: panel design, PLC/SCADA programming, instrumentation commissioning, AMC, retrofitting and turnkey project execution.",
      },
      { property: "og:title", content: "Industrial Automation Services — IAS Groups" },
      {
        property: "og:description",
        content:
          "Panel design, PLC/SCADA, instrumentation, retrofits, AMC and turnkey automation projects.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-dvh bg-steel-900 text-rubber flex flex-col">
      <SiteHeader />

      <section className="border-b border-steel-700 relative overflow-hidden cta-bg">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative max-w-[1440px] mx-auto px-6 py-16 lg:py-20">
          <div className="font-mono text-xs uppercase tracking-widest text-safety font-bold mb-4">
            // What We Do
          </div>
          <h1 className="font-display font-black text-4xl lg:text-5xl text-white uppercase tracking-tighter mb-4">
            Industrial<br />
            <span className="text-safety">Automation Services.</span>
          </h1>
          <p className="text-base text-white/70 max-w-2xl leading-relaxed">
            From a single instrument calibration to full plant automation —
            our engineering team delivers reliable, code-compliant solutions
            for India's most demanding production lines.
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.no}
              className="group bg-white border border-steel-700 hover:border-safety hover:shadow-soft transition-all p-4 rounded-md flex flex-col justify-between"
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


      </section>

      <SiteFooter />
    </div>
  );
}
