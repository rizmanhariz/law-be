import * as mongoose from 'mongoose'

export const LogInSchema = new mongoose.Schema({
    username: String,
    password: String
})