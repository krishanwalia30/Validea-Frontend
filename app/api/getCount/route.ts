import DataModel from "@/app/model/data";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    await dbConnect();

    const count = await DataModel.countDocuments();

    return Response.json({ count });
  } catch (error) {
    return Response.json({ error: "Failed to get count" }, { status: 500 });
  }
}
