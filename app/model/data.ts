import mongoose, { Schema, Document } from "mongoose";

export interface Data extends Document {
  email: string;
  title: string;
  description: string;
}

const DataSchema: Schema<Data> = new Schema({
  email: {
    type: String,
    required: [false, "email is optional"],
    // unique: true,
    match: [/.+\@.+\..+/, "please use a valid email address"],
  },
  title: {
    type: String,
    required: [false, "title required"],
  },
  description: {
    type: String,
    required: [false, "description required"],
  },
});

const DataModel =
  (mongoose.models.Data as mongoose.Model<Data>) ||
  mongoose.model<Data>("Data", DataSchema);

export default DataModel;
