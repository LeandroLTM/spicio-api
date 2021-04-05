import * as mongoose from 'mongoose'

export const TaskSchema = new mongoose.Schema({
    idMovie: String,
    title: String,
    poster: String,
    ratings: String,
})