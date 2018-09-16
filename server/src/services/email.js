if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

export default async ({ from, to, subject, email }) => {
  // using SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: to,
    from: from,
    subject: subject,
    text: email
  };
  sgMail.send(msg);
};
