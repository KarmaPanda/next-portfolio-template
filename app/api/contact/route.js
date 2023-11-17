const nodemailer = require("nodemailer");

// https://developers.google.com/oauthplayground/ to generate tokens.
export async function POST(request) {
  const data = await request.json();

  // TODO: Add server sided validation for empty emails.

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_USER,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENTSECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  console.log("Attempting to send email with following data...\n", data);

  const mail = await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: data.email,
    subject: `[${data.name}] ${data.subject}`,
    text: data.message,
  });

  console.log("Successfully sent email: ", mail.messageId);

  return Response.json({ messageId: mail.messageId });
}
