import { NextResponse } from "next/server";
import { Resend } from "resend";

const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const apiKey = "re_ADrtManD_DmZyn6xEM1YfQ8Zm4vrQkmym";
  if (!apiKey) {
    return NextResponse.json({ error: "Missing Resend API key" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'nghiatruong1.dev@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>second email</strong>!</p>'
    });
    // const data = await resend.emails.send({
    //   from: fromEmail,
    //   to: [fromEmail, email],
    //   subject: subject,
    //   react: (
    //     <>
    //       <h1>{subject}</h1>
    //       <p>Thank you for contacting us!</p>
    //       <p>New message submitted:</p>
    //       <p>{message}</p>
    //     </>
    //   ),
    // });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Resend send error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
