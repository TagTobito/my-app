import mongoose from 'mongoose';

const CounterSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true,
        default: 0,
    },
});

export default mongoose.models.Counter || mongoose.model('Counter', CounterSchema);
