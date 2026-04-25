import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & RFQ — Industrial Automation System Pvt. Ltd." },
      {
        name: "description",
        content:
          "Request a quote, ask a technical question or contact our sales team. Pan-India delivery and on-site engineering support.",
      },
      { property: "og:title", content: "Contact — IAS Groups" },
      {
        property: "og:description",
        content: "Request a quote for industrial equipment & automation services.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-dvh bg-steel-900 text-rubber flex flex-col">
      <SiteHeader />

      <section className="border-b border-steel-700 relative overflow-hidden cta-bg">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative max-w-[1440px] mx-auto px-6 py-16 lg:py-20">
          <div className="font-mono text-xs uppercase tracking-widest text-safety font-bold mb-4">
            // Talk to Sales
          </div>
          <h1 className="font-display font-black text-4xl lg:text-5xl text-white uppercase tracking-tighter mb-4">
            Request<br />
            <span className="text-safety">a Quote.</span>
          </h1>
          <p className="text-base text-white/70 max-w-2xl leading-relaxed">
            Bulk pricing, custom configurations and technical pre-sales support.
            We respond to every RFQ within 24 hours.
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 py-16 grid grid-cols-12 gap-8 lg:gap-12 w-full">
        <div className="col-span-12 lg:col-span-7">
          <form className="bg-white border border-steel-700 shadow-soft p-6 lg:p-10 space-y-5 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-steel-500 mb-2 font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-steel-900 border border-steel-700 text-rubber px-4 py-3 font-mono text-sm rounded focus:outline-none focus:border-safety transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-steel-500 mb-2 font-bold">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full bg-steel-900 border border-steel-700 text-rubber px-4 py-3 font-mono text-sm rounded focus:outline-none focus:border-safety transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-steel-500 mb-2 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-steel-900 border border-steel-700 text-rubber px-4 py-3 font-mono text-sm rounded focus:outline-none focus:border-safety transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-steel-500 mb-2 font-bold">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full bg-steel-900 border border-steel-700 text-rubber px-4 py-3 font-mono text-sm rounded focus:outline-none focus:border-safety transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-steel-500 mb-2 font-bold">
                Product / SKU of Interest
              </label>
              <input
                type="text"
                className="w-full bg-steel-900 border border-steel-700 text-rubber px-4 py-3 font-mono text-sm rounded focus:outline-none focus:border-safety transition-colors"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-steel-500 mb-2 font-bold">
                Requirements
              </label>
              <textarea
                rows={5}
                className="w-full bg-steel-900 border border-steel-700 text-rubber px-4 py-3 font-mono text-sm rounded focus:outline-none focus:border-safety resize-none transition-colors"
              />
            </div>
            <button
              type="button"
              className="gradient-blue text-white font-display font-black text-lg uppercase px-10 py-4 rounded-md shadow-soft hover:opacity-90 transition-opacity"
            >
              Submit RFQ →
            </button>
          </form>
        </div>

        <div className="col-span-12 lg:col-span-5 space-y-5">
          <div className="bg-white border border-steel-700 p-6 rounded-lg shadow-sm">
            <div className="font-display font-black text-lg text-rubber uppercase mb-1">
              {COMPANY.name}
            </div>
            <div className="font-mono text-[11px] text-safety uppercase tracking-widest">
              IAS Groups · Authorised Channel Partner
            </div>
          </div>

          <div className="bg-white border border-steel-700 p-6 rounded-lg">
            <div className="font-mono text-[10px] uppercase tracking-widest text-safety font-bold mb-3">
              Sales Hotlines
            </div>
            <ul className="space-y-2">
              {COMPANY.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p}`}
                    className="font-display font-black text-lg text-rubber hover:text-safety"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
            <div className="font-mono text-xs text-steel-500 mt-2">Mon–Sat · 9am–7pm IST</div>
          </div>

          <div className="bg-white border border-steel-700 p-6 rounded-lg">
            <div className="font-mono text-[10px] uppercase tracking-widest text-safety font-bold mb-3">
              Email
            </div>
            <ul className="space-y-2">
              {COMPANY.emails.map((e) => (
                <li key={e}>
                  <a
                    href={`mailto:${e}`}
                    className="font-mono text-sm text-rubber hover:text-safety break-all"
                  >
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-steel-700 p-6 rounded-lg">
            <div className="font-mono text-[10px] uppercase tracking-widest text-safety font-bold mb-3">
              Factory
            </div>
            <p className="text-sm text-rubber leading-relaxed">{COMPANY.factory}</p>
          </div>

          <div className="bg-white border border-steel-700 p-6 rounded-lg">
            <div className="font-mono text-[10px] uppercase tracking-widest text-safety font-bold mb-3">
              Registered Office
            </div>
            <p className="text-sm text-rubber leading-relaxed">{COMPANY.regd}</p>
          </div>

          <div className="gradient-blue text-white p-6 rounded-lg shadow-soft">
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/80 font-bold mb-2">
              Online
            </div>
            <a
              href={`https://${COMPANY.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-black text-xl uppercase hover:underline"
            >
              {COMPANY.website}
            </a>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH MAP */}
      <section className="border-t border-steel-700 bg-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div>
              <div className="font-sans text-xs text-safety uppercase tracking-widest font-bold mb-2">
                [03] Global Presence
              </div>
              <h2 className="font-display font-black text-3xl lg:text-4xl text-rubber uppercase tracking-tighter">
                Global Network
              </h2>
            </div>
            <p className="font-sans text-sm text-steel-500 max-w-md">
              Expanding our technical expertise across borders. Currently serving
              heavy industry sectors in India and key African/Asian markets.
            </p>
          </div>

          <div className="relative aspect-[21/9] bg-steel-900 rounded-xl overflow-hidden shadow-brutal border border-steel-700">
            <div className="absolute inset-0 grid-bg opacity-30" />
            
            {/* World Map Background (SVG Pattern) */}
            <svg className="absolute inset-0 w-full h-full text-safety opacity-[0.05]" viewBox="0 0 1000 500">
              <path fill="currentColor" d="M150,150 Q200,100 250,150 T350,150 T450,100 T550,150 T650,150 T750,100 T850,150 T950,150 L950,350 Q900,400 850,350 T750,350 T650,400 T550,350 T450,350 T350,400 T250,350 T150,350 Z" />
              <path fill="currentColor" d="M50,100 L100,50 L150,100 L100,150 Z" />
            </svg>

            {/* Points */}
            {[
              { name: "India", x: 72, y: 52, info: "Headquarters & R&D" },
              { name: "Nepal", x: 74, y: 48, info: "Sales & Support" },
              { name: "Zambia", x: 53, y: 74, info: "Regional Distribution" },
              { name: "Zimbabwe", x: 54, y: 79, info: "Service Center" },
            ].map((p) => (
              <div
                key={p.name}
                className="absolute group"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <div className="relative">
                  {/* Ping animation */}
                  <div className="absolute -inset-3 bg-safety rounded-full animate-ping opacity-30" />
                  {/* Core dot */}
                  <div className="size-3.5 bg-safety border-2 border-white rounded-full shadow-lg relative z-10" />

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-rubber text-white text-[10px] font-sans font-bold whitespace-nowrap rounded shadow-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20">
                    <div className="text-safety uppercase tracking-widest mb-0.5 font-black">
                      {p.name}
                    </div>
                    <div className="opacity-70">{p.info}</div>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-rubber" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mt-12 bg-steel-900/5 p-8 rounded-lg border border-steel-700/50">
            {[
              ["India", "Regional Hub"],
              ["Nepal", "Strategic Sales"],
              ["Zambia", "Mining Sector"],
              ["Zimbabwe", "Industrial Support"],
            ].map(([k, v]) => (
              <div key={k} className="border-l-2 border-safety pl-5">
                <div className="font-display font-black text-2xl text-rubber uppercase tracking-tighter">
                  {k}
                </div>
                <div className="font-sans text-[10px] text-safety uppercase tracking-widest font-bold mt-1">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
