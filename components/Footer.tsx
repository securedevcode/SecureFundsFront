import Link from "next/link";

export default function Footer() {
  const divisions = [
    { name: "Corporate Lending", href: "#" },
    { name: "Asset-Backed Credit", href: "#" },
    { name: "MSME Empowerment", href: "#" },
    { name: "Fiduciary Services", href: "#" },
  ];

  const regulatory = [
    { name: "Compliance Framework", href: "#" },
    { name: "Privacy Protocol", href: "#" },
    { name: "Investor Relations", href: "#" },
    { name: "Annual Reports", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-navy p-1.5 rounded-sm">
                <span className="material-symbols-outlined text-white text-xl">
                  account_balance
                </span>
              </div>
              <h1 className="text-lg font-extrabold text-navy tracking-tighter">
                SECUREFUNDS
              </h1>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-light mb-8">
              An RBI-partnered financial institution committed to the highest
              standards of regulatory compliance and client fiduciary
              responsibility.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-navy border border-slate-200 hover:bg-navy hover:text-white transition-all"
                aria-label="Website"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-navy border border-slate-200 hover:bg-navy hover:text-white transition-all"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
            </div>
          </div>

          {/* Divisions */}
          <div>
            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy mb-8">
              Divisions
            </h6>
            <ul className="space-y-4 text-xs font-medium text-slate-500">
              {divisions.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-emerald-corporate transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory */}
          <div>
            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy mb-8">
              Regulatory
            </h6>
            <ul className="space-y-4 text-xs font-medium text-slate-500">
              {regulatory.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-emerald-corporate transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy mb-8">
              Headquarters
            </h6>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-emerald-corporate text-lg">
                  location_on
                </span>
                <address className="text-[11px] leading-relaxed text-slate-600 font-medium not-italic">
                  Bandra Kurla Complex (BKC),
                  <br />
                  Financial District, Mumbai 400051
                </address>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-emerald-corporate text-lg">
                  call
                </span>
                <a
                  href="tel:022-800-SECURE"
                  className="text-[11px] font-bold text-navy hover:text-emerald-corporate transition-colors"
                >
                  022-800-SECURE
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col items-center gap-8">
          <div className="text-[9px] text-slate-400 text-center max-w-4xl leading-loose uppercase tracking-widest font-medium">
            © 2024 SecureFundsFinance India Pvt Ltd. All credit facilities are
            subject to rigorous risk assessment. SecureFundsFinance operates as a
            digital intermediary for RBI-regulated banking partners. | RBI REG NO:
            NBFC-IND-89231-A | ISO 27001:2022 Certified
          </div>
        </div>
      </div>
    </footer>
  );
}
