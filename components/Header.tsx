"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="bg-navy p-2 rounded">
            <span className="material-symbols-outlined text-white text-2xl">
              account_balance
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-extrabold text-navy tracking-tighter leading-none">
              SECUREFUNDS
            </h1>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-emerald-corporate">
              RBI Authorized Partner
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <Link href="#corporate" className="nav-link">
            Corporate Banking
          </Link>
          <Link href="#personal" className="nav-link">
            Personal Credit
          </Link>
          <Link href="#wealth" className="nav-link">
            Wealth Management
          </Link>
          <Link href="#compliance" className="nav-link">
            Compliance
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-sm font-semibold text-navy hover:text-emerald-corporate transition-colors">
            Client Login
          </button>
          <button className="bg-navy hover:bg-navy-light text-white text-xs font-bold uppercase tracking-widest px-8 py-3 transition-all shadow-sm">
            Inquire Now
          </button>
        </div>
      </div>
    </header>
  );
}
