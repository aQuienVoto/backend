import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String            
    },
    password: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export const User = mongoose.model('User', UserSchema);