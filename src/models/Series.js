import { Schema, model } from 'mongoose';

const serieSchema = new Schema({
    title: {
        type: [String],
        required: true,
        trim: true  // saca los espacios vacios insecesarios (no entre palabras)
    },
    description: String,
    chapters: [Number],
    status: {
        type: String,
        enum: ['transmitting', 'completed', 'cancelled']
    },
    cover: String,
}, {
    timestamps: false,
    versionKey: false
})

export default model('series', serieSchema)