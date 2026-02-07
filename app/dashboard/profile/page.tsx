"use client";

export default function ProfilePage() {
  return (
    <div className="space-y-10">


      <div>

        <h1 className="text-xl font-serif text-navy">
          Account & Profile Settings
        </h1>

        <p className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">
          Manage your institutional identity
        </p>

      </div>




      <div className="bg-white border border-slate-200 p-6 rounded shadow-sm flex items-center justify-between">


        <div className="flex items-center gap-6">


          <div className="relative">

            <div className="w-20 h-20 bg-navy text-white flex items-center justify-center text-2xl font-serif rounded">
              RI
            </div>


            <button className="absolute -bottom-1 -right-1 bg-emerald-corporate text-white p-1.5 rounded-full shadow border-2 border-white">

              <span className="material-symbols-outlined text-sm">
                photo_camera
              </span>

            </button>

          </div>



          <div>

            <h3 className="text-xl font-serif text-navy">
              Raghavan Iyer
            </h3>


            <p className="text-xs text-slate-400">
              raghavan.iyer@institutional.com • Member since 2021
            </p>

          </div>

        </div>




        <div className="bg-emerald-corporate/5 border border-emerald-corporate/20 px-4 py-2 flex items-center gap-2">

          <span className="material-symbols-outlined text-emerald-corporate text-lg">
            verified_user
          </span>


          <div>

            <p className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-corporate">
              Verification
            </p>


            <p className="text-xs font-bold text-navy">
              KYC Verified
            </p>

          </div>

        </div>

      </div>





      <div className="flex border-b border-slate-200">

        <Tab active label="Personal Information" />

        <Tab label="Bank Details" />

        <Tab label="Security & Password" />

        <Tab label="Notifications" />

      </div>





      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


        <div className="lg:col-span-2 space-y-8">


          <Section title="Contact Details">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


              <Input label="Full Name" value="Raghavan Iyer" />

              <Input label="Email Address" value="raghavan.iyer@institutional.com" />



              <div>

                <label className="form-label">
                  Mobile Number
                </label>


                <div className="flex">

                  <span className="inline-flex items-center px-3 border border-r-0 border-slate-200 bg-slate-100 text-slate-500 text-xs font-bold">
                    +91
                  </span>


                  <input
                    className="form-input !rounded-l-none"
                    value="9876543210"
                  />

                </div>

              </div>



              <Input label="Date of Birth" value="1985-06-15" type="date" />


            </div>

          </Section>




          <Section title="Permanent Address">


            <div className="space-y-6">


              <Input
                label="Street Address"
                value="Penthouse B, Skyward Towers, Worli Sea Face"
              />



              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                <Input label="City" value="Mumbai" />

                <Input label="State" value="Maharashtra" />

                <Input label="PIN Code" value="400018" />


              </div>

            </div>

          </Section>




          <div className="flex justify-end gap-4">


            <button className="px-8 py-3 text-[10px] font-bold uppercase tracking-widest border border-slate-200 text-slate-500 hover:bg-slate-50 transition-all">
              Cancel
            </button>


            <button className="px-10 py-3 text-[10px] font-bold uppercase tracking-widest bg-navy text-white hover:bg-navy-light transition-all shadow-lg">
              Save Profile
            </button>


          </div>

        </div>






        <div className="space-y-8">


          <div className="bg-white border border-slate-200 p-6 rounded shadow-sm border-l-4 border-emerald-corporate">


            <div className="flex items-center gap-3 mb-6">

              <span className="material-symbols-outlined text-emerald-corporate">
                assignment_ind
              </span>


              <h3 className="text-xs font-bold uppercase tracking-widest">
                KYC Status
              </h3>

            </div>



            <StatusRow label="PAN Verified" />

            <StatusRow label="Aadhar Linked" />

            <StatusRow label="Video KYC" />


            <div className="mt-4 p-3 bg-slate-50 rounded text-[9px] text-slate-500 italic">
              Last verified on 12 Jan 2024. Next update due in 2026.
            </div>

          </div>




          <div className="bg-white border border-slate-200 p-6 rounded shadow-sm">


            <div className="flex items-center gap-3 mb-6">

              <span className="material-symbols-outlined text-navy">
                lock_reset
              </span>


              <h3 className="text-xs font-bold uppercase tracking-widest">
                Quick Security
              </h3>

            </div>



            <SecurityButton
              title="Change Password"
              subtitle="Last changed 45 days ago"
            />


            <SecurityButton
              title="Two-Factor Authentication"
              subtitle="Currently Active"
              active
            />

          </div>

        </div>

      </div>

    </div>
  );
}



function Tab({ label, active }: any) {
  return (
    <button
      className={`px-6 py-4 text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all
      ${
        active
          ? "border-emerald-corporate text-navy bg-white"
          : "border-transparent text-slate-400 hover:text-navy"
      }`}
    >
      {label}
    </button>
  );
}



function Section({ title, children }: any) {
  return (
    <section className="bg-white border border-slate-200 rounded shadow-sm p-8">

      <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-8 pb-4 border-b border-slate-100">
        {title}
      </h3>


      {children}

    </section>
  );
}



function Input({ label, value, type = "text" }: any) {
  return (
    <div>

      <label className="form-label">
        {label}
      </label>


      <input
        type={type}
        defaultValue={value}
        className="form-input"
      />

    </div>
  );
}



function StatusRow({ label }: any) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-slate-50">

      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
        {label}
      </span>


      <span className="material-symbols-outlined text-emerald-corporate text-sm">
        check_circle
      </span>

    </div>
  );
}



function SecurityButton({ title, subtitle, active }: any) {
  return (
    <button className="w-full flex items-center justify-between p-3 border border-slate-100 rounded hover:bg-off-white transition-all text-left mb-3">

      <div>

        <p className="text-xs font-bold text-navy">
          {title}
        </p>


        <p
          className={`text-[9px] uppercase tracking-tighter ${
            active
              ? "text-emerald-corporate font-bold"
              : "text-slate-400"
          }`}
        >
          {subtitle}
        </p>

      </div>



      <span className="material-symbols-outlined text-slate-300">
        chevron_right
      </span>

    </button>
  );
}
