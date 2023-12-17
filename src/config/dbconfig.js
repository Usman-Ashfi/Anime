import mongoose from "mongoose";

export function dbconnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.connect(
    "mongodb+srv://abc:abc@usman.pemo5g0.mongodb.net/Anime?retryWrites=true&w=majority"
  );
}
