"use client";

import { useState } from "react";

const emojiRegex =
  /[\u{1F300}-\u{1FAFF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/u;

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function sanitize(value: string) {
    return value.replace(emojiRegex, "").trim();
  }

  function validate() {
    if (form.name.length < 2 || form.name.length > 50) {
      return "Name must be 2–50 characters";
    }

    if (!/^[A-Za-z\s]+$/.test(form.name)) {
      return "Name must contain only letters";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      return "Invalid mobile number";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      return "Invalid email address";
    }

    if (form.message.length < 10 || form.message.length > 300) {
      return "Message must be 10–300 characters";
    }

    return "";
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: sanitize(value),
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    const err = validate();

    if (err) {
      setError(err);
      return;
    }

    setLoading(true);

    const whatsappNumber = "919000000000";

    const autoMessage = `
Thank you for contacting us.

Name: ${form.name}
Mobile: ${form.phone}
Email: ${form.email}

Message:
${form.message}

We provide general loan-related information and referral assistance only.
We are not a bank or lender, and loan approval is subject to bank/NBFC policies.

No guarantees. No payments are required.
    `;

    const encoded = encodeURIComponent(autoMessage);

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encoded}`;

    window.open(whatsappURL, "_blank");

    setLoading(false);

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  }

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
            Reach out for general loan-related guidance and assistance.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div className="bg-white border border-slate-200 shadow-md p-8">

            <h3 className="text-lg font-serif text-navy mb-6">
              Send an Enquiry
            </h3>

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              noValidate
            >

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
                  type="email"
                  required
                  className="w-full border-slate-200 py-3 text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  maxLength={300}
                  rows={4}
                  required
                  className="w-full border-slate-200 py-3 text-sm"
                  placeholder="Write your enquiry..."
                />
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3 text-xs text-slate-500">
                We do not collect Aadhaar, PAN, OTP, or banking passwords.
              </div>

              {error && (
                <div className="text-sm text-red-600 font-semibold text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-navy hover:bg-navy-light text-white py-3 text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50"
              >
                {loading ? "Opening WhatsApp..." : "Send via WhatsApp"}
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
                  <span>Mumbai, Maharashtra, India</span>
                </div>

              </div>

            </div>

            <div className="bg-slate-50 border border-slate-200 p-6">

              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-3">
                Important Notice
              </h4>

              <p className="text-xs text-slate-500 leading-relaxed">
                We provide general loan-related information and referral
                assistance only. We are not a bank, NBFC, or lender.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
