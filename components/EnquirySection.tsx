"use client";

import { useState } from "react";

const emojiRegex =
  /[\u{1F300}-\u{1FAFF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/u;

export default function EnquirySection() {
  const [form, setForm] = useState({
    loanType: "Personal Loan",
    name: "",
    phone: "",
    email:"",
    city: "",
    income: "Below ₹20,000",
  });

  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function sanitize(value: string) {
    return value.replace(emojiRegex, "").trim();
  }

  function validate() {
    if (form.name.length < 2 || form.name.length > 50) {
      return "Name must be 2 to 50 characters";
    }

    if (!/^[A-Za-z\s]+$/.test(form.name)) {
      return "Name must contain only letters";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      return "Invalid mobile number";
    }

    if (form.city.length < 2 || form.city.length > 30) {
      return "City must be 2 to 30 characters";
    }

    if (!/^[A-Za-z\s]+$/.test(form.city)) {
      return "City must contain only letters";
    }

    if (!consent) {
      return "Consent is required";
    }

    return "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setMessage("");

    const error = validate();

    if (error) {
      setMessage(error);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error();
      }

      setMessage("Enquiry submitted successfully");

      setForm({
        loanType: "Personal Loan",
        name: "",
        phone: "",
        city: "",
        income: "Below ₹20,000",
      });

      setConsent(false);
    } catch {
      setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: sanitize(value),
    }));
  }

  return (
    <section
      id="enquiry"
      className="py-24 bg-off-white border-t border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-navy mb-4">
            Indicative Loan Eligibility Enquiry
          </h2>

          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Share your basic details to receive general loan-related guidance.
          </p>
        </div>

        <div className="bg-white border border-slate-200 shadow-lg p-10">

          <form
            className="space-y-8"
            onSubmit={handleSubmit}
            noValidate
          >

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                Type of Loan
              </label>

              <select
                name="loanType"
                value={form.loanType}
                onChange={handleChange}
                className="w-full border-slate-200 py-3 text-sm"
              >
                <option>Personal Loan</option>
                <option>Home Loan</option>
                <option>Business Loan</option>
                <option>Loan Against Property</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Full Name
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={50}
                  type="text"
                  required
                  className="w-full border-slate-200 py-3 text-sm"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Mobile Number
                </label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={10}
                  type="tel"
                  required
                  className="w-full border-slate-200 py-3 text-sm"
                  placeholder="10-digit Mobile"
                />
              </div>
               <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Email
                </label>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={100}
                  type="email"
                  required
                  className="w-full border-slate-200 py-3 text-sm"
                  placeholder="Your Email where we can contact you"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                City
              </label>

              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                maxLength={30}
                type="text"
                required
                className="w-full border-slate-200 py-3 text-sm"
                placeholder="Your City"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                Income Range
              </label>

              <select
                name="income"
                value={form.income}
                onChange={handleChange}
                className="w-full border-slate-200 py-3 text-sm"
              >
                <option>Below ₹20,000</option>
                <option>₹20,000 – ₹40,000</option>
                <option>₹40,000 – ₹75,000</option>
                <option>Above ₹75,000</option>
              </select>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 text-xs text-slate-500">
              We do not ask for Aadhaar, PAN, OTP, or banking passwords.
            </div>

            <div className="flex items-start gap-3">

              <input
                type="checkbox"
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="mt-1"
              />

              <p className="text-xs text-slate-500 leading-relaxed">
                I agree to be contacted regarding my enquiry. I understand that
                eligibility results are indicative only and subject to lender
                approval.
              </p>

            </div>

            {message && (
              <div className="text-center text-sm font-semibold text-emerald-corporate">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={!consent || loading}
              className="w-full bg-navy hover:bg-navy-light text-white py-4 text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
