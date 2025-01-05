import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: Request) {
  let filePath: string | null = null;

  try {
    console.log("Processing form data...");
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File;

    console.log("Form data processed:", { name, email, phone, message });

    if (file) {
      console.log("Processing file upload...");
      const buffer = Buffer.from(await file.arrayBuffer());
      // Use temporary system directory
      const tempUploadsDir = os.tmpdir();
      filePath = path.join(tempUploadsDir, file.name);
      await fs.writeFile(filePath, buffer);
      console.log("File saved at:", filePath);
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "djordjeivanovic65@gmail.com",
        pass: "owlj ddmq zjce gues"
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contact@sorriso.care',
      subject: `Message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
      attachments: filePath ? [{ filename: path.basename(filePath), path: filePath }] : [],
    };

    console.log("Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    if (filePath) {
      await fs.unlink(filePath);
      console.log("File deleted:", filePath);
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 202 });
  } catch (error) {
    console.error("Error occurred:", error);
    if (filePath) {
      await fs.unlink(filePath);
      console.log("File deleted after error:", filePath);
    }
    return NextResponse.json({ error: `Failed to send email: ${error}` }, { status: 500 });
  }
}
