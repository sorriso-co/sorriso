// import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";
// import nodemailer from "nodemailer";

// const dataFilePath = path.resolve("./contact-info.json");

// const transporter = nodemailer.createTransport({
//   service: "gmail", // You can use other services like 'hotmail', 'yahoo', etc.
//   auth: {
//     user: "djordjeivanovic65@gmail.com",
//     pass: "owlj ddmq zjce gues",
//   },
// });

// export async function POST(req: Request) {
//   try {
//     const { email, phone } = await req.json();

//     if (!email || !phone) {
//       return NextResponse.json(
//         { error: "Email and phone number are required" },
//         { status: 400 }
//       );
//     }

//     // Read existing data from the file
//     let existingData: { email: string; phone: string }[] = [];
//     if (fs.existsSync(dataFilePath)) {
//       const fileContent = fs.readFileSync(dataFilePath, "utf8");
//       existingData = JSON.parse(fileContent);
//     }

//     // Append the new contact information
//     existingData.push({ email, phone });

//     // Write the updated data back to the file
//     fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2), "utf8");

//     // Send an email with the contact information
//     const emailContent = `
//       <h1>New Contact Information Received</h1>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//     `;

//     await transporter.sendMail({
//       from: "djordjeivanovic65@gmail.com",
//       to: "contact@sorriso.care",
//       subject: "New Contact Information Submission",
//       html: emailContent,
//     });

//     return NextResponse.json(
//       { message: "Contact information saved and email sent successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error saving or sending email:", error);
//     return NextResponse.json(
//       { error: "Failed to save contact information or send email" },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const dataFilePath = path.resolve("./contact-info.json");

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like 'hotmail', 'yahoo', etc.
  auth: {
    user: "djordjeivanovic65@gmail.com",
    pass: "owlj ddmq zjce gues",
  },
});

export async function POST(req: Request) {
  try {
    const { email, confirmEmail } = await req.json(); // Updated to expect confirmEmail instead of phone

    if (!email || !confirmEmail) {
      return NextResponse.json(
        { error: "Email and confirm email are required" },
        { status: 400 }
      );
    }

    // Read existing data from the file
    let existingData: { email: string; confirmEmail: string }[] = []; // Updated to store confirmEmail
    if (fs.existsSync(dataFilePath)) {
      const fileContent = fs.readFileSync(dataFilePath, "utf8");
      existingData = JSON.parse(fileContent);
    }

    // Append the new contact information
    existingData.push({ email, confirmEmail }); // Updated to store confirmEmail

    // Write the updated data back to the file
    fs.writeFileSync(
      dataFilePath,
      JSON.stringify(existingData, null, 2),
      "utf8"
    );

    // Send an email with the contact information
    const emailContent = `
      <h1>New Contact Information Received</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Confirm Email:</strong> ${confirmEmail}</p>
    `;

    await transporter.sendMail({
      from: "djordjeivanovic65@gmail.com",
      to: "contact@sorriso.care",
      subject: "New Contact Information Submission",
      html: emailContent,
    });

    return NextResponse.json(
      { message: "Contact information saved and email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving or sending email:", error);
    return NextResponse.json(
      { error: "Failed to save contact information or send email" },
      { status: 500 }
    );
  }
}
