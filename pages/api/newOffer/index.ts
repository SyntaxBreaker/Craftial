import { NextApiRequest, NextApiResponse } from "next";
import connectToMongoDB from "utils/mongoDB";
import Offer from "models/offer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  (async () => {
    try {
      await connectToMongoDB();

      const offer = new Offer(req.body);
      await offer.save();
      return res.status(200).json("Your offer has been successfully created.")
    } catch (err) {
      console.log(err);
    }
  })();
}

export const config = {
  api: {
    externalResolver: true,
  },
};
