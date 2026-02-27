import "dotenv/config"; //it is required to be imported first
import nodemailer from "nodemailer";

console.log("SMTP User:", process.env.SMTP_USER);
console.log(
  "SMTP Pass:",
  process.env.SMTP_PASS ? "Key is present" : "Key is MISSING"
);
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default transporter;
