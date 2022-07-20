import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true  // saca los espacios vacios insecesarios (no entre palabras)
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['completed', 'cancelled', 'not finished'],
        default: 'not finished'
    },
    archived: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model('task', taskSchema)