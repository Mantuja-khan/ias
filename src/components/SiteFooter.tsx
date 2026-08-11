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
            <div className="font-display font-black text-sm uppercase tracking-widest mt-8 mb-3 text-safety">
              E-mail
            </div>
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

          {/* Social Media Buttons */}
          <div className="flex items-center gap-3 mt-5">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-safety transition-all duration-300 flex items-center justify-center group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white group-hover:text-rubber">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-safety transition-all duration-300 flex items-center justify-center group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white group-hover:text-rubber">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://wa.me/919992291037" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-safety transition-all duration-300 flex items-center justify-center group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white group-hover:text-rubber">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.138.564 4.14 1.543 5.876L0 24l6.29-1.524A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 0 1-5.012-1.374l-.36-.214-3.732.904.952-3.617-.235-.371A9.767 9.767 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
            </a>
          </div>
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
            20/1/2/2, sector 18, Near Avlon Rangoli, Dharuhera, Rewari, Haryana -123106
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