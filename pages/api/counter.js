import dbConnect from '../../lib/dbConnect';
import Counter from '../../lib/models/counter';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        let counter = await Counter.findOne({});
        if (!counter) {
        counter = await Counter.create({ count: 0 });
        }
        res.status(200).json({ count: counter.count });
    } else if (req.method === 'POST') {
        const counter = await Counter.findOne({});
        if (counter) {
        counter.count += 1;
        await counter.save();
        } else {
        await Counter.create({ count: 1 });
        }
        res.status(200).json({ count: counter.count });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
