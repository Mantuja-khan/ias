import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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

const services = [
  {
    no: "01",
    title: "Control Panel Design & Manufacturing",
    desc: "PCC, MCC, PLC, VFD, APFC and customised control panels designed and built in-house to IS/IEC standards.",
    bullets: ["MCC & PCC up to 6300A", "VFD & soft-starter panels", "PLC/HMI integration", "Type-tested designs"],
  },
  {
    no: "02",
    title: "PLC, SCADA & HMI Programming",
    desc: "Allen Bradley, Siemens, Mitsubishi, Delta and Schneider PLC programming with SCADA & HMI development for any process.",
    bullets: ["Ladder, FBD, ST", "WinCC, FactoryTalk, iFix", "Recipe & batch logic", "OPC-UA / Modbus / Profinet"],
  },
  {
    no: "03",
    title: "Instrumentation & Field Commissioning",
    desc: "Loop checking, calibration, hook-up and commissioning of process instrumentation across plants.",
    bullets: ["Loop checks & calibration", "Hook-up engineering", "DCS interfacing", "HART & Foundation Fieldbus"],
  },
  {
    no: "04",
    title: "Retrofitting & Modernisation",
    desc: "Replace obsolete relay logic and legacy controls with modern PLC/SCADA-based automation with minimum downtime.",
    bullets: ["Brownfield upgrades", "Drive retrofits", "Energy optimisation", "Migration support"],
  },
  {
    no: "05",
    title: "Annual Maintenance Contracts",
    desc: "Comprehensive AMC for control panels, drives, instrumentation, motors and complete plant electricals.",
    bullets: ["Preventive maintenance", "Breakdown response", "Spare-part management", "On-site engineers"],
  },
  {
    no: "06",
    title: "Turnkey Automation Projects",
    desc: "Concept-to-commissioning EPC delivery: engineering, procurement, fabrication, installation and training.",
    bullets: ["Project management", "BOQ & engineering", "Site execution", "Training & handover"],
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.no}
              className="group bg-white border border-steel-700 hover:border-safety hover:shadow-soft transition-all p-7 rounded-md"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="font-mono text-xs text-safety uppercase tracking-widest font-bold">
                  Service / {s.no}
                </div>
                <div className="size-10 gradient-blue text-white font-display font-black flex items-center justify-center rounded-md text-sm">
                  {s.no}
                </div>
              </div>
              <h3 className="font-display font-black text-xl text-rubber uppercase leading-tight mb-3 group-hover:text-safety">
                {s.title}
              </h3>
              <p className="text-sm text-steel-500 leading-relaxed mb-5">
                {s.desc}
              </p>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-xs font-mono text-rubber">
                    <span className="text-safety font-bold">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 gradient-blue text-white p-10 lg:p-14 rounded-lg flex flex-col lg:flex-row items-center justify-between gap-6 shadow-soft">
          <div>
            <h2 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tighter mb-2">
              Need a custom scope?
            </h2>
            <p className="text-white/85 max-w-xl">
              Share your single line, P&ID or RFQ — our engineers will revert
              with a technical proposal within 48 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-white text-safety font-display font-black text-lg uppercase px-8 py-4 rounded-md hover:bg-steel-900 transition-colors whitespace-nowrap"
          >
            Talk to an Engineer →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
