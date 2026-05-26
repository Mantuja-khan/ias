import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/data/company";
import logo from "@/assets/iaslogo.png";
import footerImg from "@/assets/footerimage.jpeg";

export function SiteFooter() {
  return (
    <footer
      className="text-white border-t-4 border-safety bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/3e/f3/e2/3ef3e23e8bad050d40a4fc02ffc6f964.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-rubber/90 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-stretch">

        {/* Col 1 */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img
              src={logo}
              alt="IAS Logo"
              className="h-16 w-auto object-contain bg-white p-2 rounded-md"
            />

            <div className="leading-tight">
              <div className="font-display font-black text-base uppercase tracking-tight">
                Industrial
              </div>

              <div className="font-sans text-[10px] uppercase tracking-widest text-safety">
                Automation System
              </div>

              <div className="font-sans text-[9px] uppercase tracking-widest text-white/60">
                Pvt. Ltd.
              </div>
            </div>
          </div>

          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Authorized supplier of industrial instrumentation, electrical,
            and mechanical equipment for India's heavy industry sector.
          </p>

          <ul className="space-y-1.5 text-xs text-white/75">
            {COMPANY.emails.map((e) => (
              <li key={e}>
                <a
                  href={`mailto:${e}`}
                  className="hover:text-safety font-sans break-all"
                >
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2 */}
        <div>
          <div className="font-display font-black text-sm uppercase tracking-widest mb-5 text-safety">
            Catalog
          </div>

          <ul className="space-y-2.5 text-sm text-white/80">
            <li>
              <Link
                to="/category/$slug"
                params={{ slug: "instrumentation" }}
                className="hover:text-safety"
              >
                Instrumentation
              </Link>
            </li>

            <li>
              <Link
                to="/category/$slug"
                params={{ slug: "electrical" }}
                className="hover:text-safety"
              >
                Electrical
              </Link>
            </li>

            <li>
              <Link
                to="/category/$slug"
                params={{ slug: "mechanical" }}
                className="hover:text-safety"
              >
                Mechanical
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-safety">
                Services
              </Link>
            </li>
          </ul>

          <div className="font-display font-black text-sm uppercase tracking-widest mt-8 mb-3 text-safety">
            Address
          </div>

          <p className="text-sm text-white/80 leading-relaxed font-sans">
            20/1/2/2, sector 18, Near Avalon Rangoli, Dharuhera,
            Rewari, Haryana -12106
          </p>
        </div>

        {/* Col 3 */}
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

          <div className="font-display font-black text-sm uppercase tracking-widest mt-8 mb-3 text-safety">
            Phone
          </div>

          <ul className="space-y-2 text-xs text-white/80">
            {COMPANY.phones.map((p) => (
              <li key={p}>
                <a
                  href={`tel:${p}`}
                  className="hover:text-safety font-sans"
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE LARGE IMAGE */}
        <div className="lg:col-span-2 relative flex items-stretch min-h-[360px]">

          <div className="w-full h-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">

            <img
              src={footerImg}
              alt="IAS Facility"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 py-4 text-[11px] font-sans tracking-wide text-white/60 flex flex-col sm:flex-row justify-between gap-2">

          <span>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </span>

          <span className="text-safety">
            {COMPANY.website}
          </span>

        </div>
      </div>
    </footer>
  );
}