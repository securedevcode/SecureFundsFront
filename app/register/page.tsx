"use client";

import { useState } from "react";
import Link from "next/link";
// import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT PANEL */}
      <section
        className="hidden lg:flex flex-col justify-between p-16 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
        }}
      >
        <div>

          <h1 className="text-4xl font-serif mb-6">
            Institutional Onboarding
          </h1>

          <p className="text-white/80 max-w-md">
            Secure, compliant, step-by-step registration.
          </p>

        </div>

        <p className="text-xs text-white/60">
          © 2026 SecureFundsFinance India Pvt Ltd
        </p>
      </section>


      {/* RIGHT PANEL */}
      <section className="flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          {/* STEP INDICATOR */}
          <div className="flex justify-center gap-3 mb-10">

            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 w-20 rounded ${
                  step >= s ? "bg-emerald-corporate" : "bg-slate-200"
                }`}
              />
            ))}

          </div>


          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6">

              <h2 className="text-2xl font-serif text-navy text-center">
                Create Account
              </h2>

              <button
                
                className="w-full border border-slate-200 py-3 font-semibold hover:bg-off-white flex items-center justify-center gap-3"
              >
                <img src="/google.svg" className="w-5" />
                Continue with Google
              </button>

              <div className="text-center text-slate-400 text-sm">
                or
              </div>

              <input
                placeholder="Official Email"
                className="form-input"
              />

              <input
                placeholder="Mobile Number"
                className="form-input"
              />

              <button
                onClick={() => setStep(2)}
                className="w-full bg-navy text-white py-3 font-bold uppercase tracking-widest text-sm"
              >
                Continue
              </button>

            </div>
          )}


          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6">

              <h2 className="text-2xl font-serif text-navy text-center">
                Organization Details
              </h2>

              <input
                placeholder="Company Name"
                className="form-input"
              />

              <input
                placeholder="CIN / Registration No."
                className="form-input"
              />

              <textarea
                placeholder="Business Address"
                className="form-input h-24"
              />

              <div className="flex gap-4">

                <button
                  onClick={() => setStep(1)}
                  className="w-full border py-3 font-bold"
                >
                  Back
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="w-full bg-navy text-white py-3 font-bold uppercase"
                >
                  Continue
                </button>

              </div>

            </div>
          )}


          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-6">

              <h2 className="text-2xl font-serif text-navy text-center">
                Security Setup
              </h2>

              <input
                type="password"
                placeholder="Password"
                className="form-input"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="form-input"
              />

              <button
                className="w-full bg-navy text-white py-3 font-bold uppercase tracking-widest"
              >
                Complete Registration
              </button>

            </div>
          )}


          {/* FOOTER */}
          <div className="mt-8 text-center text-sm text-slate-500">

            Already registered?{" "}
            <Link href="/login" className="font-bold text-navy">
              Login
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
