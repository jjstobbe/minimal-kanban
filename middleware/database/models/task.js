import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({
    title: String,
    points: Number,
    dateCreated: Date,
    status: Number,
    boardId: String,
});

const collection = 'tasks';
const Task = model('Task', TaskSchema, collection);

export default Task;
