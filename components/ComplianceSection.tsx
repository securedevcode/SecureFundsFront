export default function ComplianceSection() {
  const partners = [
    {
      icon: "account_balance",
      title: "RBI Partnered",
      subtitle: "Regulated Entity",
    },
    {
      icon: "verified_user",
      title: "ISO 27001",
      subtitle: "Data Security Standard",
    },
    {
      icon: "gpp_maybe",
      title: "SEBI Compliant",
      subtitle: "Investment Protocol",
    },
    {
      icon: "security",
      title: "NPCI Integrated",
      subtitle: "Secure Payments",
    },
  ];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-corporate mb-4">
            Regulatory Compliance &amp; Partners
          </h3>
          <div className="h-px w-24 bg-emerald-corporate/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 group opacity-70 hover:opacity-100 transition-opacity"
            >
              <span className="material-symbols-outlined text-4xl text-emerald-corporate">
                {partner.icon}
              </span>
              <span className="text-sm font-semibold tracking-widest uppercase text-center">
                {partner.title}
                <br />
                <span className="text-[10px] font-light text-slate-400">
                  {partner.subtitle}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
