"use client";

import { useState } from "react";
import Link from "next/link";

const loans = [
  { title: "Personal Loan", icon: "person" },
  { title: "Home Loan", icon: "home" },
  { title: "Business Loan", icon: "business" },
  { title: "Loan Against Property", icon: "apartment" },
  { title: "Vehicle Loan", icon: "directions_car" },
  { title: "Education Loan", icon: "school" },

  { title: "Working Capital Loan", icon: "trending_up" },
  { title: "MSME Loan", icon: "store" },
  { title: "Startup Loan", icon: "rocket_launch" },
  { title: "Professional Loan", icon: "badge" },
  { title: "Balance Transfer", icon: "swap_horiz" },
];

export default function LoanExplorer() {
  const [query, setQuery] = useState("");

  const filtered = loans.filter((loan) =>
    loan.title.toLowerCase().includes(query.toLowerCase())
  );

  const visibleLoans = query ? filtered : loans.slice(0, 6);

  return (
    <section id="loans" className="bg-off-white py-28 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-14">

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-emerald-corporate font-bold mb-3">
            Loan Information & Referral
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
            Find Loan Information
          </h2>

          <p className="text-sm text-slate-500">
            We provide general loan-related information and referral assistance only.
          </p>
        </div>


        <div className="max-w-xl mx-auto">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search loan type"
              className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded focus:ring-1 focus:ring-emerald-corporate outline-none"
            />
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleLoans.map((loan, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 p-8 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-navy/5 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-corporate text-xl">
                    {loan.icon}
                  </span>
                </div>

                <h3 className="text-lg font-serif text-navy">
                  {loan.title}
                </h3>
              </div>

              <p className="text-sm text-slate-500 mb-8">
                Information and enquiry referral assistance for {loan.title.toLowerCase()}.
              </p>

              <Link href="/check-eligibility">
                <button className="w-full border border-slate-200 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
                  Submit Enquiry
                </button>
              </Link>
            </div>
          ))}
        </div>


        {query && filtered.length === 0 && (
          <div className="text-center text-sm text-slate-400">
            No matching loan type found
          </div>
        )}


        <div className="max-w-4xl mx-auto text-center pt-10 border-t border-slate-200">
          <p className="text-xs text-slate-500 leading-relaxed">
            Loan approval is subject to lender policies and verification.
            We do not approve loans, guarantee sanctions, decide interest rates,
            or collect payments.
          </p>
        </div>

      </div>
    </section>
  );
}
