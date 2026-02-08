export default function AboutPage() {
  return (
    <main className="bg-off-white py-24">

      <div className="max-w-4xl mx-auto px-6 space-y-12">


        <div className="text-center">

          <h1 className="text-4xl font-serif text-navy mb-4">
            About Us
          </h1>

          <p className="text-sm text-slate-500">
            Independent Loan Information & Referral Assistance
          </p>

        </div>



        <section className="bg-white border border-slate-200 p-10 space-y-6">

          <h2 className="text-xl font-serif text-navy">
            Who We Are
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            We operate as an independent individual consultant providing
            general loan-related information and referral assistance to users.
            Our objective is to help individuals understand loan options
            and connect them with appropriate lending institutions when required.
          </p>

        </section>



        <section className="bg-white border border-slate-200 p-10 space-y-6">

          <h2 className="text-xl font-serif text-navy">
            What We Do
          </h2>

          <ul className="space-y-3 text-sm text-slate-600">

            <li>• Provide general loan-related information</li>

            <li>• Assist with enquiry submission</li>

            <li>• Share indicative eligibility guidance</li>

            <li>• Refer enquiries to banks or lending professionals</li>

          </ul>

        </section>



        <section className="bg-white border border-slate-200 p-10 space-y-6">

          <h2 className="text-xl font-serif text-navy">
            What We Do Not Do
          </h2>

          <ul className="space-y-3 text-sm text-slate-600">

            <li>• We do not approve loans</li>

            <li>• We do not guarantee loan sanctions</li>

            <li>• We do not decide interest rates</li>

            <li>• We do not collect payments</li>

          </ul>

        </section>



        <section className="bg-slate-50 border border-slate-200 p-8 text-center">

          <p className="text-xs text-slate-500 leading-relaxed">

            Loan approval is subject to lender policies and verification.
            Any eligibility information shown is indicative only and
            should not be considered a financial commitment.

          </p>

        </section>


      </div>

    </main>
  );
}
