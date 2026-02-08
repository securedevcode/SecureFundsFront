import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, phone, city, loanType } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

await transporter.sendMail({
  from: `"SecureFunds Finance" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  subject: "New Loan Enquiry | SecureFunds Finance",
  html: `
  <div style="background:#f8fafc;padding:40px 0;font-family:Arial,Helvetica,sans-serif;">
    
    <div style="max-width:600px;margin:auto;background:#ffffff;border:1px solid #e5e7eb;">
      
      <!-- HEADER -->
      <div style="background:#0A1D37;padding:24px 30px;">
        <table width="100%">
          <tr>
            <td style="color:#ffffff;font-size:18px;font-weight:700;">
              SECURE FUNDS FINANCE
            </td>
            <td align="right" style="color:#10b981;font-size:11px;font-weight:700;letter-spacing:2px;">
              LOAN ENQUIRY
            </td>
          </tr>
        </table>
      </div>

      <!-- BODY -->
      <div style="padding:35px 30px;color:#0f172a;">
        
        <h2 style="margin:0 0 15px;font-size:22px;">
          New Loan Enquiry Received
        </h2>

        <p style="font-size:14px;color:#475569;line-height:1.6;margin-bottom:30px;">
          A new loan enquiry has been submitted through your website. 
          Please find the client details below.
        </p>

        <!-- DETAILS TABLE -->
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
          
          <tr>
            <td style="padding:12px;border:1px solid #e5e7eb;font-weight:600;">
              Full Name
            </td>
            <td style="padding:12px;border:1px solid #e5e7eb;">
              ${name}
            </td>
          </tr>

          <tr>
            <td style="padding:12px;border:1px solid #e5e7eb;font-weight:600;">
              Email
            </td>
            <td style="padding:12px;border:1px solid #e5e7eb;">
              ${email}
            </td>
          </tr>

          <tr>
            <td style="padding:12px;border:1px solid #e5e7eb;font-weight:600;">
              Mobile
            </td>
            <td style="padding:12px;border:1px solid #e5e7eb;">
              ${phone}
            </td>
          </tr>

          <tr>
            <td style="padding:12px;border:1px solid #e5e7eb;font-weight:600;">
              City
            </td>
            <td style="padding:12px;border:1px solid #e5e7eb;">
              ${city}
            </td>
          </tr>

          <tr>
            <td style="padding:12px;border:1px solid #e5e7eb;font-weight:600;">
              Loan Type
            </td>
            <td style="padding:12px;border:1px solid #e5e7eb;">
              ${loanType}
            </td>
          </tr>

        </table>

        <!-- NOTE -->
        <div style="margin-top:30px;padding:15px;background:#f1f5f9;border-left:4px solid #10b981;">
          <p style="margin:0;font-size:12px;color:#475569;line-height:1.5;">
            ⚠️ This enquiry is indicative only. Loan approval is subject to bank/NBFC
            verification and policies.
          </p>
        </div>

      </div>

      <!-- FOOTER -->
      <div style="background:#f8fafc;padding:20px 30px;border-top:1px solid #e5e7eb;">
        
        <p style="margin:0;font-size:11px;color:#64748b;line-height:1.6;text-align:center;">
          © 2026 SecureFunds Finance | Loan Information & Referral Assistance <br/>
          This email was generated automatically from your website enquiry system.
        </p>

      </div>

    </div>

  </div>
  `,
});
await transporter.sendMail({
  from: `"SecureFunds Finance" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "We Have Received Your Enquiry",
  html: `
    <p>Dear ${name},</p>

    <p>Thank you for contacting SecureFunds Finance.</p>

    <p>
      We provide general loan-related information and referral assistance only.
      Our team will contact you shortly.
    </p>

    <p>
      Regards,<br/>
      SecureFunds Team
    </p>
  `,
});



  return NextResponse.json({ success: true });
}
