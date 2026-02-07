export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Application",
      description:
        "Comprehensive digital submission through our encrypted platform.",
    },
    {
      number: "02",
      title: "Vetting",
      description:
        "Rigorous algorithmic and manual credit assessment by analysts.",
    },
    {
      number: "03",
      title: "Approval",
      description:
        "Terms finalized within 24 hours of successful verification.",
    },
    {
      number: "04",
      title: "Settlement",
      description:
        "Seamless capital transfer via RTGS/NEFT institutional channels.",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h3 className="text-3xl font-serif text-navy mb-20">
          The SecureFunds Standard
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="space-y-6">
              <div className="text-4xl font-light text-slate-200">
                {step.number}
              </div>
              <h5 className="font-bold text-navy uppercase tracking-widest text-xs">
                {step.title}
              </h5>
              <p className="text-slate-500 text-xs leading-loose px-4 font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
