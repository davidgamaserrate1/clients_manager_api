import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String, required: false},
        login: {type: String, required: true},
        password: {type: String, required: true},
    }
)

const user = mongoose.model('userAdmin', userSchema)

export default user