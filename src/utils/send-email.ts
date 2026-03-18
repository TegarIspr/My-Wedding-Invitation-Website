/**
 * @file send-email.js
 * @description Handles sending emails using the EmailJS service, initialized with environment variables for public key, service ID, and template ID.
 * @author Emanuele Sgroi
 * @date 19 October 2024
 */

import emailjs from "@emailjs/browser";

const sendEmail = async (data: Record<string, unknown>) => {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      data,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export default sendEmail;
