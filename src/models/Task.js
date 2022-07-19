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
        enum: ['completed', 'cancelled', 'in progress'],
        default: 'in progress'
    },
}, {
    timestamps: true,
    versionKey: false
})

export default model('task', taskSchema)