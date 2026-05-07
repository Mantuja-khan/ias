import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/data/company";

export function SiteFooter() {
  return (
    <footer 
      className="text-white mt-24 border-t-4 border-safety bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/3e/f3/e2/3ef3e23e8bad050d40a4fc02ffc6f964.jpg')" }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-rubber/90 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="size-12 gradient-blue flex items-center justify-center text-white font-display font-black rounded-md">
              IAS
            </div>
            <div className="leading-tight">
              <div className="font-display font-black text-base uppercase tracking-tight">
                Industrial
              </div>
              <div className="font-sans text-[10px] uppercase tracking-widest text-safety">
                Automation System
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-5">
            Authorized supplier of industrial instrumentation, electrical, and
            mechanical equipment for India's heavy industry sector.
          </p>
          <div className="flex gap-2 flex-wrap">
            {["ISO 9001", "MSME", "GST Reg."].map((b) => (
              <span
                key={b}
                className="border border-white/20 px-2.5 py-1 text-[10px] font-sans uppercase tracking-widest text-white/80 rounded"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display font-black text-sm uppercase tracking-widest mb-5 text-safety">
            Catalog
          </div>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>
              <Link to="/category/$slug" params={{ slug: "instrumentation" }} className="hover:text-safety">
                Instrumentation
              </Link>
            </li>
            <li>
              <Link to="/category/$slug" params={{ slug: "electrical" }} className="hover:text-safety">
                Electrical
              </Link>
            </li>
            <li>
              <Link to="/category/$slug" params={{ slug: "mechanical" }} className="hover:text-safety">
                Mechanical
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-safety">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-display font-black text-sm uppercase tracking-widest mb-5 text-safety">
            Company
          </div>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>
              <Link to="/channel-partners" className="hover:text-safety">
                Channel Partners
              </Link>
            </li>
            <li>
              <Link to="/clients" className="hover:text-safety">
                Our Clients
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-safety">
                Contact / RFQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-display font-black text-sm uppercase tracking-widest mb-5 text-safety">
            Reach Us
          </div>
          <ul className="space-y-2 text-xs text-white/80 leading-relaxed">
            <li className="font-display font-black text-sm text-white normal-case tracking-tight">
              {COMPANY.name}
            </li>
            {COMPANY.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} className="hover:text-safety font-sans">
                  {p}
                </a>
              </li>
            ))}
            {COMPANY.emails.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="hover:text-safety font-sans break-all">
                  {e}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10 mt-2">
              <span className="text-safety font-sans uppercase tracking-widest text-[10px]">Factory:</span>
              <br />
              {COMPANY.factory}
            </li>
            <li>
              <span className="text-safety font-sans uppercase tracking-widest text-[10px]">Regd. Office:</span>
              <br />
              {COMPANY.regd}
            </li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 py-4 text-[11px] font-sans tracking-wide text-white/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
          <span className="text-safety">{COMPANY.website}</span>
        </div>
      </div>
    </footer>
  );
}
