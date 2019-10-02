import { Schema, model } from 'mongoose';

const BoardSchema = new Schema({
    title: String,
    statuses: [String],
    dateCreated: Date,
});

const collection = 'boards';
const Board = model('Board', BoardSchema, collection);

export default Board;
