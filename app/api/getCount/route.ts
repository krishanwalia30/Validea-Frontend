import DataModel from "@/app/model/data";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    await dbConnect();

    const count = await DataModel.countDocuments();

    return Response.json({ count });
  } catch (err) {
    return Response.json({ error: err }, { status: 500 });
  }
}
