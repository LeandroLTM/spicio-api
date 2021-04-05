import {Document } from 'mongoose';

export class Tasks extends Document {
    idMovie: string;
    title: string;
    poster: string;
    ratings: string;
}
