import mongoose from "mongoose";

const clientsSchema = new mongoose.Schema(
    {
        id: {type: String, required: false},
        name: {type: String, required: true},
        instagram: {type: String, required: true},
        organization: {type: String, required: true},
    }
)

const client = mongoose.model('client', clientsSchema)

export default client