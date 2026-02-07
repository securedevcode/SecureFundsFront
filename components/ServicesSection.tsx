export default function ServicesSection() {
  const services = [
    {
      icon: "business",
      title: "Enterprise Liquidity",
      description:
        "Customized working capital solutions for mid-to-large scale operations, focusing on long-term fiscal health.",
      features: ["Competitive Prime Rates", "Tax-Efficient Structure"],
      buttonText: "Details",
      buttonClass:
        "w-full py-4 border border-slate-200 text-[10px] font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all",
      cardClass: "bg-white border border-slate-200 p-12 hover:border-navy transition-all duration-300",
      textClass: "text-slate-500",
    },
    {
      icon: "real_estate_agent",
      title: "Asset Financing",
      description:
        "High-value property and infrastructure financing with bespoke amortization schedules and advisory support.",
      features: ["Up to 30-Year Tenure", "Dedicated Portfolio Manager"],
      buttonText: "Connect with Advisor",
      buttonClass:
        "w-full py-4 bg-emerald-corporate text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all",
      cardClass: "bg-navy text-white p-12 shadow-2xl relative overflow-hidden",
      textClass: "text-slate-400",
      premium: true,
    },
    {
      icon: "account_balance_wallet",
      title: "Bespoke Personal Credit",
      description:
        "Exclusive credit lines for high-net-worth individuals, designed for immediate liquidity and wealth preservation.",
      features: ["Zero Prepayment Penalties", "Priority Disbursement"],
      buttonText: "Inquire",
      buttonClass:
        "w-full py-4 border border-slate-200 text-[10px] font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all",
      cardClass: "bg-white border border-slate-200 p-12 hover:border-navy transition-all duration-300",
      textClass: "text-slate-500",
    },
  ];

  return (
    <section className="py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-4xl font-serif text-navy mb-6">
              Strategic Credit Facilities
            </h3>
            <p className="text-slate-500 font-light text-lg">
              Our financial instruments are meticulously crafted to support
              sustainable growth and institutional expansion.
            </p>
          </div>
          <a
            href="#portfolio"
            className="text-xs font-bold uppercase tracking-widest text-navy flex items-center gap-2 group"
          >
            View Full Portfolio{" "}
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className={service.cardClass}>
              {service.premium && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-emerald-corporate text-[9px] font-bold px-2 py-1 uppercase tracking-widest">
                    Premium
                  </span>
                </div>
              )}

              <span
                className={`material-symbols-outlined text-3xl ${
                  service.premium ? "text-emerald-corporate" : "text-navy"
                } mb-10`}
              >
                {service.icon}
              </span>

              <h4
                className={`text-xl font-bold ${
                  service.premium ? "text-white" : "text-navy"
                } mb-4`}
              >
                {service.title}
              </h4>

              <p
                className={`${service.textClass} text-sm leading-relaxed mb-10 font-light`}
              >
                {service.description}
              </p>

              <ul className="space-y-4 mb-10">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className={`flex items-center gap-3 text-xs font-bold uppercase tracking-wider ${
                      service.premium ? "text-white" : "text-navy"
                    }`}
                  >
                    <span className="material-symbols-outlined text-emerald-corporate text-lg">
                      check
                    </span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={service.buttonClass}>{service.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
