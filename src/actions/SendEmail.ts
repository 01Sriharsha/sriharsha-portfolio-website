"use server";

import { Resend } from "resend";
import React from "react";
import { z } from "zod";
import SenderEmailTemplate from "@/email/SenderEmailTemplate";
import { createTransport } from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import { render } from "@react-email/render";
import AutoReplyEmailTemplate from "@/email/AutoReplyEmailTemplate";

const Schema = z.object({
  email: z.string().min(1, "Email cannot be empty!!").email("Invalid Email!!"),
  message: z.string().min(1, "Message Cannot be empty!!"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const email = formData.get("email");

  const parsedData = Schema.safeParse({ email: email, message: message });

  if (!parsedData.success) {
    return { error: parsedData.error.errors[0].message };
  }

  let data;

  const { email: parsedEmail, message: parsedMessage } = parsedData.data;

  const username = parsedEmail.split("@")[0] || "";

  try {
    data = await resend.sendEmail({
      from: `${username?.toUpperCase()} <sriharsha-portfolio@resend.dev>`,
      to: process.env.ADMIN_MAIL_ID!,
      subject: `Message from ${username} - Portfolio Website`,
      reply_to: parsedEmail as string,
      react: React.createElement(SenderEmailTemplate, {
        senderEmail: parsedEmail as string,
        message: parsedMessage as string,
        username,
      }),
    });
    if (data.id) {
      await replyEmail(parsedEmail, username);
    } else {
      console.log("data", data);
      throw new Error("Something went wrong!!Try again later!");
    }
  } catch (error: unknown) {
    return {
      error:
        (error instanceof Error && error.message) ||
        "Failed to send email! Try again later!!",
    };
  }

  if (data) {
    return { success: "Email sent successfully!!" };
  } else {
    return { error: "Failed to send email! Try again later!!" };
  }
};

//Send reply email to the sender
const replyEmail = async (email: string, username: string) => {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465, // SMTP with SSL
    secure: true, // use SSL
    auth: {
      user: process.env.ADMIN_MAIL_ID,
      pass: process.env.ADMIN_MAIL_PASSWORD,
    },
  });

  const mailOptions: MailOptions = {
    from: process.env.ADMIN_MAIL_ID,
    to: email,
    subject: `Reply to your Message via My Portfolio`,
    replyTo: process.env.ADMIN_MAIL_ID,
    html: render(
      React.createElement(AutoReplyEmailTemplate, {
        username,
      })
    ),
  };

  return transporter.sendMail(mailOptions);
};
