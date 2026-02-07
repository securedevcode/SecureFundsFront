"use client";

export default function CTASection() {
  return (
    <section className="pb-32 px-8">
      <div className="max-w-7xl mx-auto bg-navy p-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtHEOEi3crjlGln71ETdLxp6QA8Eu5I3MH_JBuJ_FnWfvaLHPvjSmgmllSeZhUb-zpsbx_FixAz9iJBAVQPWqjQZBkzsptVCAryAC_jlcFV2Pjpex06HbVgQX9vN3zAdqAX3H_MpgZMWcTbGGInncj0KTAOcXxxpdU5c1UZubPZvqP3JI3OemID_22OLOsk1p3djxYaWPlYEOzOkwigt1G2yrhMxYg2PEtwN6RM_F1BhqOHH7FQH4PB9CO9o1XAORAP_sNNO8RlUP5')",
          }}
        ></div>

        <h3 className="text-4xl font-serif text-white mb-8 relative z-10">
          Determine Your Institutional Capacity
        </h3>

        <p className="text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
          Begin a formal evaluation of your borrowing eligibility with no impact
          on your market credit rating. Our consultants are available for complex
          structuring requirements.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <button className="bg-emerald-corporate text-white px-12 py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all">
            Begin Assessment
          </button>
          <button className="border border-white/20 text-white px-12 py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
            Request Prospectus
          </button>
        </div>
      </div>
    </section>
  );
}
