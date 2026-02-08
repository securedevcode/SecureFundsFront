"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-off-white border-t border-slate-200"
    >
      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-3xl font-serif text-navy mb-4">
            Contact Us
          </h2>

          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Reach out to us for general loan-related information and enquiry
            assistance.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-12 items-start">


          <div className="bg-white border border-slate-200 shadow-md p-8">

            <h3 className="text-lg font-serif text-navy mb-6">
              Send an Enquiry
            </h3>

            <form className="space-y-6" onClick={()=>{
              await fetch("/api/send-email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

            }}  >


              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  className="w-full border-slate-200 py-3 text-sm"
                  placeholder="Your Name"
                />
              </div>


              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  className="w-full border-slate-200 py-3 text-sm"
                  placeholder="10-digit Mobile Number"
                />
              </div>


              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Email 
                </label>

                <input
                  type="email"
                  className="w-full border-slate-200 py-3 text-sm"
                  placeholder="your@email.com"
                />
              </div>


              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Message
                </label>

                <textarea
                  rows={4}
                  className="w-full border-slate-200 py-3 text-sm"
                  placeholder="Write your enquiry..."
                />
              </div>


              <div className="bg-slate-50 border border-slate-200 p-3 text-xs text-slate-500">
                We do not collect Aadhaar, PAN, OTP, or banking passwords.
              </div>


              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy-light text-white py-3 text-xs font-bold uppercase tracking-widest transition-all"
              >
                Submit Enquiry
              </button>


            </form>

          </div>



          <div className="space-y-8">


            <div className="bg-white border border-slate-200 p-8">

              <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-4">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm text-slate-600">


                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-emerald-corporate">
                    call
                  </span>
                  <span>+91 90000 00000</span>
                </div>


                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-emerald-corporate">
                    mail
                  </span>
                  <span>support@yourdomain.com</span>
                </div>


                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-emerald-corporate">
                    location_on
                  </span>
                  <span>
                    Mumbai, Maharashtra, India
                  </span>
                </div>


              </div>

            </div>



            <div className="bg-slate-50 border border-slate-200 p-6">

              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-3">
                Important Notice
              </h4>

              <p className="text-xs text-slate-500 leading-relaxed">
                We provide general loan-related information and referral
                assistance only. We are not a bank, NBFC, or lender. All loan
                approvals are subject to bank or NBFC policies.
              </p>

            </div>


          </div>

        </div>

      </div>
    </section>
  );
}
