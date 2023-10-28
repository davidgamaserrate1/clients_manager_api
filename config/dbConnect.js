import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(process.env.DATABASE_ACESS)

let db = mongoose.connection;

export default db;
 