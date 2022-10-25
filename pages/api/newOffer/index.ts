import { NextApiRequest, NextApiResponse } from "next";
import connectToMongoDB from "../../../utils/mongoDB";
import Offer from "../../../models/offer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    (async () => {
        try {
            console.log(`Connecting to MongoDB`);
            await connectToMongoDB();
            console.log(`Connected to MongoDB`);

            const offer = new Offer(req.body);
            await offer.save();
        } catch (err) {
            console.log(err);
        }
    })();
}
