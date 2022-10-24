import { NextApiRequest, NextApiResponse } from "next";
import connectToMongoDB from "../../../utils/mongoDB";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    (async() => {
        try {
            console.log(`Connecting to MongoDB`);
            await connectToMongoDB();
            console.log(`Connected to MongoDB`);
        } catch(err) {
            console.log(err);
        }
    })();
}