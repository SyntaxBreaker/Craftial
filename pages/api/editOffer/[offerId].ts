import { NextApiRequest, NextApiResponse } from "next";
import connectToMongoDB from "../../../utils/mongoDB";
import offer from "../../../models/offer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    (async () => {
        try {
            const { offerId } = req.query;
            await connectToMongoDB();
            await offer.findOneAndUpdate({ _id: offerId }, req.body);
        } catch (err) {
            console.log(err);
        }
    })();
}
