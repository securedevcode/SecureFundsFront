"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 border border-slate-200 px-4 py-2 rounded mb-8 bg-off-white">
            <span className="material-symbols-outlined text-emerald-corporate text-xl">
              verified
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
              Institutional Grade Financial Services
            </span>
          </div>

          <h2 className="text-6xl font-serif text-navy leading-[1.1] mb-8">
            Capital Built on <br />
            <span className="text-emerald-corporate italic">
              Foundation of Trust
            </span>
          </h2>

          <p className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed font-light">
            Experience the standard of elite financial partnership.
            SecureFundsFinance provides sophisticated lending solutions with the
            transparency your enterprise deserves.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="bg-navy hover:bg-navy-light text-white px-10 py-4 font-bold text-sm uppercase tracking-widest transition-all shadow-lg">
              Apply for Credit
            </button>
            <button className="bg-transparent border border-navy text-navy hover:bg-off-white px-10 py-4 font-bold text-sm uppercase tracking-widest transition-all">
              Schedule Consultation
            </button>
          </div>

          <div className="mt-16 flex items-center gap-10 border-t border-slate-100 pt-10">
            <div>
              <p className="text-2xl font-bold text-navy">12,000+</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">
                Clients Managed
              </p>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div>
              <p className="text-2xl font-bold text-navy">₹450Cr+</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">
                Capital Disbursed
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative bg-white p-4 shadow-2xl border border-slate-100">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBv0wSn_w6Jj4aU4LF0UGdbRRV6OWt9IY8lEwVrAPbO_SZTjjwYRF8hGnUwnJWqHPz48p0ZQnDB4GOIjfGFBqpr_ij0Un6jmLOZWvWVyIeYQa6cupdwiYP3CsZHiU7bWVEHsKoOrMW63HeJmxRQHbSHl-gB5C6YjWfDW_I7Lz3P2jQkHw-WcSlmxnGpa9e5Bopg5-82U785q8nYyWowcU8ZfiUepd7zQRXmvgi2ztv6qWM1Z8DYu4_Oct0LB3BBcbsSPfn8hfMg_oU"
                alt="Professional financial consultation"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-navy text-white p-8 max-w-[280px] shadow-2xl">
              <span className="material-symbols-outlined text-4xl text-emerald-corporate mb-4">
                security
              </span>
              <p className="text-sm font-medium leading-relaxed opacity-90 italic">
                "Security is not a feature; it is our philosophy. We protect
                your financial integrity as our own."
              </p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-emerald-corporate">
                — Board of Directors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
