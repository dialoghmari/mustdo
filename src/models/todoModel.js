import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TodoSchema = new Schema({

    user:{
        type: Number,
        default: 1,
    },
    content:{
        type: String,
        required: 'Enter a content of a todo item'
    },
    isDone:{
        type: Boolean,
        default: false,
    }
    },{
    timestamps: true,

});
