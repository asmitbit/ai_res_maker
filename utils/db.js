import mongoose from "mongoose";

export default async function db() {
  if (mongoose.connections.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("✅ Connected to database");
  } catch (err) {
    console.log(err);
    console.log("❌ DB Connection Error");
  }
}
