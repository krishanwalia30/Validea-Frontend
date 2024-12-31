import DataModel from "@/app/model/data";
import dbConnect from "@/lib/dbConnect";

export async function POST(request: Request) {
  await dbConnect();

  const { email, title, description } = await request.json();

  try {
    // Saving the user data in the backend
    const userData = new DataModel({
      email: email,
      title: title,
      description: description,
    });
    await userData.save();
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
