import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: { json: () => PromiseLike<{ email: any; }> | { email: any; }; }) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "djordjeivanovic65@gmail.com",
        pass: "owlj ddmq zjce gues"
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Exclusive Dental Discount Awaits!",
      html: `
       <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Exclusive Dental Discount - Sorriso Care</title>
            <style>
            body {
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                font-family: Arial, sans-serif;
            }
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #006666;
                color: #ffffff;
                text-align: center;
                padding: 20px;
            }
            .header img {
                max-width: 120px;
                margin-bottom: 10px;
            }
            .header h1 {
                font-size: 24px;
                margin: 0;
            }
            .content {
                padding: 20px;
                color: #333333;
                line-height: 1.6;
            }
            .content h2 {
                color: #006666;
                font-size: 20px;
                margin-bottom: 15px;
            }
            .content p {
                margin: 10px 0;
            }
           .cta-button {
            display: inline-block;
            margin: 20px 0;
            padding: 12px 25px;
            background-color:rgb(166, 236, 236); /* Lighter teal for better visibility */
            color: #ffffff; /* White text for contrast */
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            }
            .cta-button:hover {
                background-color: #008b8b; /* Slightly darker teal on hover */
            }
            .cta-button:hover {
                background-color: #004c4c;
            }
            .footer {
                background-color: #f4f4f4;
                text-align: center;
                padding: 15px;
                font-size: 12px;
                color: #777777;
            }
            .footer p {
                margin: 5px 0;
            }
            </style>
        </head>
        <body>
            <div class="email-container">
            <!-- Header -->
            <div class="header">
                <h1>Welcome to Sorriso Care!</h1>
            </div>

            <!-- Content -->
            <div class="content">
                <h2>Your Exclusive Dental Discount Awaits!</h2>
                <p>
                We're thrilled to have you join Sorriso Care! As part of our exclusive
                offer, you can enjoy savings of up to <strong>€2000</strong> on premium dental
                treatments, along with <strong>complimentary accommodation</strong> during your stay in Montenegro.
                </p>
                <p>
                Whether you're considering <strong>dental implants</strong>, <strong>veneers</strong>, or a
                <strong>full-mouth restoration</strong>, our team of expert dentists is here to help you achieve your
                <strong>perfect smile</strong>.
                </p>
                <p>
                Ready to take the first step? Click below to book your consultation and let
                us create a personalized treatment plan for you.
                </p>
                <a
                href="https://www.sorriso.care/book"
                target="_blank"
                class="cta-button"
                >
                Book Your Consultation
                </a>
                <p>
                If you have any questions, feel free to reach out to our team. We're here to make your dental journey seamless and enjoyable.
                </p>
                <p>Warm regards,<br />The Sorriso Care Team</p>
            </div>

            <!-- Footer -->
            <div class="footer">
                <p>&copy; 2024 Sorriso Care. All rights reserved.</p>
                <p>
                <a href="https://sorriso.care/unsubscribe" style="color: #006666; text-decoration: none;">
                    Unsubscribe
                </a>
                </p>
            </div>
            </div>
        </body>
        </html>

      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Promo email sent successfully!" });
  } catch (error) {
    console.error("Failed to send promo email:", error);
    return NextResponse.json({ message: "Failed to send promo email." }, { status: 500 });
  }
}
