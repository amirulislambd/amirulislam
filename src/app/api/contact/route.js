import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill all the fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const now = new Date();
    const dateStr = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const mailOptions = {
      from: `"Amirul Islam Portfolio" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `📬 New Message from ${name} — Portfolio`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Portfolio Message</title>
</head>
<body style="margin:0; padding:0; background-color:#0f0f1a; font-family: 'Segoe UI', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f1a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; border-radius:20px; overflow:hidden; box-shadow: 0 25px 60px rgba(0,0,0,0.5);">

          <!-- HEADER -->
          <tr>
            <td style="background: linear-gradient(135deg, #7c4dff 0%, #4c6ef5 50%, #4cd7f6 100%); padding: 40px 40px 50px; text-align: center; position:relative;">
              <div style="font-size: 44px; margin-bottom: 12px;">💌</div>
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 800; letter-spacing: -0.5px;">
                New Contact Message!
              </h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 14px; font-weight: 500;">
                Someone reached out from your portfolio
              </p>
            </td>
          </tr>

          <!-- SENDER INFO CARD -->
          <tr>
            <td style="background-color: #151528; padding: 0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, rgba(124,77,255,0.15), rgba(76,215,246,0.08)); border: 1px solid rgba(124,77,255,0.3); border-radius: 16px; margin-top: -20px; overflow:hidden;">
                <tr>
                  <td style="padding: 28px 30px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.07);">
                          <p style="margin:0; font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:#7c4dff; font-weight:700;">Sender</p>
                          <p style="margin:6px 0 0; font-size:22px; font-weight:800; color:#ffffff;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 16px;">
                          <p style="margin:0; font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:#4cd7f6; font-weight:700;">Reply To</p>
                          <a href="mailto:${email}" style="display:inline-block; margin:6px 0 0; font-size:16px; font-weight:600; color:#ffffff; text-decoration:none;">
                            ${email}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- MESSAGE BODY -->
          <tr>
            <td style="background-color: #151528; padding: 30px 40px 10px;">
              <p style="margin:0 0 12px; font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:#a78bfa; font-weight:700;">💬 Their Message</p>
              <div style="background-color: #1e1e38; border-left: 4px solid #7c4dff; border-radius: 0 12px 12px 0; padding: 24px 26px;">
                <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #e2e8f0; white-space: pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- REPLY BUTTON -->
          <tr>
            <td style="background-color: #151528; padding: 30px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your message to Amirul Islam" 
                       style="display:inline-block; padding: 16px 48px; background: linear-gradient(135deg, #7c4dff, #4cd7f6); color:#ffffff; text-decoration:none; border-radius:50px; font-size:15px; font-weight:700; letter-spacing:0.3px; box-shadow: 0 8px 24px rgba(124,77,255,0.4);">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td style="background-color: #151528; padding: 0 40px;">
              <div style="height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent);"></div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color: #151528; padding: 24px 40px 40px; text-align: center;">
              <p style="margin:0; font-size:13px; color: #64748b;">
                Received on <strong style="color:#94a3b8;">${dateStr}</strong> at <strong style="color:#94a3b8;">${timeStr}</strong>
              </p>
              <p style="margin: 12px 0 0; font-size:12px; color: #475569;">
                This message was sent from your portfolio at
                <a href="https://amirulislam.vercel.app" style="color:#7c4dff; text-decoration:none;">amirulislam.vercel.app</a>
              </p>
              <div style="margin-top: 20px; font-size: 11px; color: #334155;">
                &copy; ${new Date().getFullYear()} Amirul Islam · All rights reserved
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

