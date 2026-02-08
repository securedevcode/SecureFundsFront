import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-24 pb-12">

      <div className="max-w-7xl mx-auto px-8">


        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">


          <div>

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

              Independent loan information and referral assistance platform.
              We are not a bank, NBFC, or lending institution.

            </p>


            <div className="flex gap-4">

              <a
                href="mailto:secure1funds@gmail.com"
                className="w-8 h-8 flex items-center justify-center text-navy border border-slate-200 hover:bg-navy hover:text-white transition-all"
              >

                <span className="material-symbols-outlined text-sm">
                  mail
                </span>

              </a>

              <a
                href="https://wa.me/9711863158"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center text-navy border border-slate-200 hover:bg-navy hover:text-white transition-all"
              >

                <span className="material-symbols-outlined text-sm">
                  chat
                </span>

              </a>

            </div>

          </div>




          <div>

            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy mb-8">
              Services
            </h6>


            <ul className="space-y-4 text-xs font-medium text-slate-500">

              <li>Personal Loan Assistance</li>

              <li>Home Loan Assistance</li>

              <li>Business Loan Assistance</li>

              <li>Loan Against Property</li>

              <li>Other Loan Enquiries</li>

            </ul>

          </div>




          <div>

            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy mb-8">
              Legal
            </h6>


            <ul className="space-y-4 text-xs font-medium text-slate-500">

              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-corporate transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-emerald-corporate transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-emerald-corporate transition-colors"
                >
                  Disclaimer
                </Link>
              </li>

            

            </ul>

          </div>




          <div>

            <h6 className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy mb-8">
              Contact
            </h6>


            <div className="space-y-6">


              <div className="flex items-start gap-4">

                <span className="material-symbols-outlined text-emerald-corporate text-lg">
                  location_on
                </span>

                <address className="text-[11px] leading-relaxed text-slate-600 font-medium not-italic">

                  Noida, Uttar Pradesh, India

                </address>

              </div>



              <div className="flex items-center gap-4">

                <span className="material-symbols-outlined text-emerald-corporate text-lg">
                  call
                </span>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-[11px] font-bold text-navy hover:text-emerald-corporate transition-colors"
                >

                  +91-9711863158

                </a>

              </div>


            </div>

          </div>


        </div>




        <div className="pt-12 border-t border-slate-100 flex flex-col items-center gap-6">


          <p className="text-[9px] text-slate-400 text-center max-w-4xl leading-loose uppercase tracking-widest font-medium">

            © 2026 | Loan Information & Referral Assistance <br />

            This website is operated by an independent individual consultant.
            We do not provide loans and do not guarantee approvals.

          </p>
        </div>


      </div>

    </footer>
  );
}
