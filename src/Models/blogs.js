import mongoose from "mongoose";


const blog = new mongoose.Schema({
    title: String,
    details: String,
    src:String,
})

export default mongoose.models.blogs || mongoose.model("blogs",blog)