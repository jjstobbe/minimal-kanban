import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: String,
    password: String,
    dateCreated: Date,
});

const collection = 'users';
const User = model('User', UserSchema, collection);

export default User;
