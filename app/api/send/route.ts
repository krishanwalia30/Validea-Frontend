// import { Resend } from "resend";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import Email from "@/app/emails/Email";

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  // host: "smpt.gmail.com",
  // port:587,
  // secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { email, title, description } = await request.json();
    console.log("Received data:", { email, title, description });

    // Call external API to get market research
    const response = await fetch(
      "https://idea-validation-system.onrender.com/market-research",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: title, description: description }),
      }
    );

    console.log("THE BACKEND API IS CORRECTLY WORKING")

    const data = await response.json();
    console.log("API Response:", data);

    const markdownContent = data.market_research;
    console.log(markdownContent);
    // const markdownContent = "# Hello from Validea";

    if (!markdownContent) {
      return Response.json(
        { error: "Failed to generate market research" },
        { status: 500 }
      );
    }

    // Use absolute URLs for internal API calls
    const saveDataResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/uploadData`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          email: email,
        }),
      }
    );
    if (saveDataResponse.ok) {
      console.log("User data saved successfully!");
    }

    // const emailHTML = await render(Email({ markdownContent }));
    const emailHTML = await render(Email({ markdownContent }));

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Market Report Summary📝",
      html: emailHTML,
      replyTo: "thedohub@gmail.com",

      attachments: [
        {
          filename: "emailHeader.png",
          path: "public/static/emailHeader.png",
          // path: "path/to/your-image.jpg",
          cid: "emailHeader@emailHeaderImage", // same cid value as in the html img src
        },
        {
          filename: "emailFooter.png",
          path: "public/static/emailFooter.png",
          // path: "path/to/your-image.jpg",
          cid: "unique@emailFooterImage", // same cid value as in the html img src
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
